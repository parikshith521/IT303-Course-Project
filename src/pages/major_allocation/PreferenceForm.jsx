import React, { useState } from 'react';
import {
    Box, Text, Table, Thead, Tbody, Tr, Th, Td, Input, Button, Heading,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';

import { Guides } from './GuideData';

export const PreferenceForm = () => {

    // State to store the preferences
    const [preferences, setPreferences] = useState(
        Guides.reduce((acc, person) => {
            acc[person.id] = '';
            return acc;
        }, {})
    );

    // State to store validation messages
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    // Chakra UI modal control
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Handler to update the preference for a person
    const handlePreferenceChange = (id, value) => {
        setPreferences({
            ...preferences,
            [id]: value,
        });
    };

    // Validation function
    const validatePreferences = () => {
        const values = Object.values(preferences);

        // Check if any preference is empty
        if (values.some(value => value === '')) {
            return `All numbers must be between 1 and ${Guides.length}.`;
        }

        // Check if all preferences are numbers between 1 and N
        const invalidValues = values.filter(value => value < 1 || value > Guides.length);
        if (invalidValues.length > 0) {
            return `All numbers must be between 1 and ${Guides.length}.`;
        }

        // Check if there are duplicate preferences
        const uniqueValues = new Set(values);
        if (uniqueValues.size !== values.length) {
            return 'Each number must be unique.';
        }

        return '';
    };

    // Handler to submit the form
    const handleSubmit = () => {
        const validationError = validatePreferences();

        if (validationError) {
            setModalMessage(validationError);
            setIsSuccess(false);
        } else {
            setModalMessage('Preferences submitted successfully!');
            setIsSuccess(true);
            console.log('Submitted Preferences:', preferences);
        }

        // Open the modal
        onOpen();
    };

    return (
        <Box maxW="auto" mx="auto" mt={8} py={4} px={10} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Heading as="h2" size="lg" textAlign="center" mt={6} mb={8}>
                Major Project Allocation Form
            </Heading>
            <Text textAlign="center" mb={6}>Enter Guide Preference Order (1 being the highest preference)</Text>

            {/* Create a table to display the data */}
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Specialization</Th>
                        <Th>Email</Th>
                        <Th>Preference</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Guides.map((person) => (
                        <Tr key={person.id}>
                            <Td>{person.name}</Td>
                            <Td>{person.specialization}</Td>
                            <Td>{person.email}</Td>
                            <Td maxW={'250px'}>
                                <Input
                                    type="number"
                                    placeholder="Enter preference"
                                    value={preferences[person.id]}
                                    onChange={(e) => handlePreferenceChange(person.id, e.target.value)}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            {/* Center the submit button */}
            <Box display="flex" justifyContent="center" mt={6}>
                <Button colorScheme="teal" onClick={handleSubmit}>
                    Submit Preferences
                </Button>
            </Box>

            {/* Modal for error/success messages */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{isSuccess ? 'Success' : 'Error'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {modalMessage}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};
