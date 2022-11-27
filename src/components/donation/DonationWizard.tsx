import { Box, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import CountSelection from './CountSelection';

// type Props = {};

export default function DonationWizard() {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });

  const next = (values: any = {}) => {
    const mergedDetails = { ...donationDetails, ...values };

    setStep(step + 1);
    setDonationDetails(mergedDetails);
  };

  const previous = () => {
    setStep(step - 1);
  };

  const pages = [
    <CountSelection next={next} initialCount={donationDetails.count} />,
    <div>
      Page 2{' '}
      <button type="button" onClick={previous}>
        prev
      </button>
    </div>,
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}
    </Box>
  );
}
