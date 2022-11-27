import { Box, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

// type Props = {};

export default function DonationWizard() {
  const [step, setStep] = useState(0);

  const next = () => {
    setStep(step + 1);
  };

  const previous = () => {
    setStep(step - 1);
  };

  const pages = [<div>Page 1</div>, <div>Page 2</div>];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}

      <VStack>
        <Button
          colorScheme="orange"
          size="lg"
          borderRadius="full"
          onClick={next}
          width="100%"
        >
          Next
        </Button>

        <Button
          width="100%"
          size="lg"
          borderRadius="full"
          variant="ghost"
          fontSize="sm"
          color="gray.700"
          onClick={previous}
        >
          Previus
        </Button>
      </VStack>
    </Box>
  );
}
