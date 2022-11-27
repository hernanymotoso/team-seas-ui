import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Donation } from '../../models/donation.domain';
import formatDate from '../../utils/formatDate';

type LeaderboardItemProps = {
  donation: Donation;
};

export default function LeaderboardItem({ donation }: LeaderboardItemProps) {
  return (
    <Flex
      boxShadow="md"
      p={3}
      bg="white"
      borderRadius="lg"
      maxW="xl"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar size="lg" />

      <Box flex="1" ml={4}>
        <Flex justifyContent="space-between" h="100%">
          <Flex direction="column" textAlign="left" justifyContent="center">
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="blue.500"
              textTransform="uppercase"
            >
              {donation.team}
            </Text>

            <Text fontWeight="bold">{donation.displayName}</Text>

            <Text fontSize="sm">{donation.message}</Text>
          </Flex>

          <Flex
            direction="column"
            justifyContent="space-around"
            textAlign="right"
          >
            <div>
              <Badge
                colorScheme="green"
                borderRadius="full"
                textTransform="lowercase"
                py={1}
                px={3}
                as="div"
              >
                {donation.count.toLocaleString()} pounds
              </Badge>
            </div>

            <Text fontSize="xs">{formatDate(donation.createdAt)}</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
