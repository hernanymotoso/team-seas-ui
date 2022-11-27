import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQuery } from 'urql';
import { Donation } from '../../models/donation.domain';
import LeaderboardItem from './LeaderboardItem';

const DonationsQuery = `
    query Query($orderBy: OrderByParams) {
        donations(orderBy: $orderBy) {
            count
            id
            displayName
            createdAt
            message
            team
        }
    }
`;

type DonationsQueryDomain = {
  donations: Donation[];
};

export default function Leaderboard() {
  const [field, setOrderByField] = useState('createdAt');

  const [{ data, fetching, error }] = useQuery<DonationsQueryDomain>({
    query: DonationsQuery,
    variables: {
      orderBy: {
        field,
        direction: 'desc',
      },
    },
  });

  if (fetching) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <Box w="100%">
      <Heading as="h1" size="2xl">
        LEADERBOARD
      </Heading>

      <RadioGroup
        onChange={setOrderByField}
        value={field}
        mx="auto"
        width="fit-content"
      >
        <Stack direction="row" p="5">
          <Radio value="createdAt">Most Recent</Radio>

          <Radio value="count">Most Pounds</Radio>
        </Stack>
      </RadioGroup>

      <VStack spacing={4}>
        {data?.donations.map(donation => (
          <LeaderboardItem
            key={`leaderboard-item-${donation.id}`}
            donation={donation}
          />
        ))}
      </VStack>
    </Box>
  );
}
