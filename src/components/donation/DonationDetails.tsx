import { Button, Heading, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { InputField } from '../form/InputField';
import { TextareaField } from '../form/TextAreaField';

const detailsSchema = yup.object().shape({
  displayName: yup.string().required('Please enter a display name'),
  email: yup
    .string()
    .email('Plase enter a valid email')
    .required('Please enter an email'),
  mobile: yup.string().nullable(),
  team: yup.string().nullable(),
  message: yup.string().nullable(),
});

type DonationDetailsProps = {
  next: (values: any) => void;
  previous: () => void;
};

const DonationDetails = ({ next, previous }: DonationDetailsProps) => {
  const onSubmit = (values: any) => {
    next(values);
  };

  return (
    <Formik
      initialValues={{
        displayName: '',
        email: '',
        mobile: '',
        team: '',
        message: '',
      }}
      onSubmit={onSubmit}
      validationSchema={detailsSchema}
    >
      {formikProps => (
        <Form>
          <VStack spacing={4} align="stretch">
            <Heading as="h3" size="md" fontWeight="bold">
              Details
            </Heading>

            <InputField
              label="Display Name"
              name="displayName"
              placeholder="Display Name"
            />

            <InputField
              label="Email Address"
              name="email"
              placeholder="Email"
            />

            <InputField
              label="Mobile Phone"
              name="mobile"
              placeholder="Mobile Phone"
            />

            <InputField label="Team" name="team" placeholder="Team name" />

            <TextareaField
              label="Message"
              name="message"
              placeholder="My #TeamSeas message is..."
            />

            <hr />

            <VStack spacing={2}>
              <Button
                colorScheme="orange"
                size="lg"
                borderRadius="full"
                type="submit"
                width="100%"
              >
                Submit
              </Button>

              <Button
                colorScheme="ghost"
                size="lg"
                fontSize="sm"
                color="gray.700"
                borderRadius="full"
                type="submit"
                width="100%"
                onClick={previous}
              >
                Previous
              </Button>
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default DonationDetails;
