import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import LeaderboardItem from './LeaderboardItem';

export default function Leaderboard() {
  return (
    <Box w="100%">
      <Heading>LEADERBOARD</Heading>

      <VStack spacing={4}>
        <LeaderboardItem
          donation={{
            displayName: 'Mr Best',
            count: 1000,
            createdAt: '2022-12-12T12:30:11',
            team: 'Team 1',
            message: 'Any message 1',
          }}
        />

        <LeaderboardItem
          donation={{
            displayName: 'Mr Best',
            count: 1000,
            createdAt: '2022-12-12T12:30:11',
            team: 'Team 2',
            message: 'Any message 2',
          }}
        />

        <LeaderboardItem
          donation={{
            displayName: 'Mr Best',
            count: 1000,
            createdAt: '2022-12-12T12:30:11',
          }}
        />
      </VStack>
    </Box>
  );
}
