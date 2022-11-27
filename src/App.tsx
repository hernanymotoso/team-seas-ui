import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';

import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Counter } from './components/donation/Counter';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} bg="gray.50">
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="32" pointerEvents="none" />

            <Heading as="h1" size="xl">
              JOIN THE MOVEMENT!
            </Heading>

            <Text>
              The team is growing everyday and scoring wins for the planet.
              <br /> Remove trash with us and track our progress!
            </Text>

            <Heading as="h2" size="4xl">
              <Counter from={0} to={2345243554} />
            </Heading>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
