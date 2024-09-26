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
            return `All fields must contain numbers between 1 and ${Guides.length}.`;
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
        <Box maxW="100vw" maxH="100vh" mx="20px" mt={8} py={4} px={['auto', 'auto', 'auto', '150px']} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Heading fontFamily="'Sanchez', serif" size="xl" textAlign="center" mt={6} mb={8}>
                Major Project Allocation Form
            </Heading>
            <Text fontFamily="'Poppins', sans-serif" textAlign="center" mb={6}>Enter Guide Preference Order (1 being the highest preference)</Text>

            {/* Create a table to display the data */}
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th textAlign='center' fontFamily="'Poppins', sans-serif">Name</Th>
                        <Th textAlign='center' fontFamily="'Poppins', sans-serif">Specialization</Th>
                        <Th textAlign='center' fontFamily="'Poppins', sans-serif">Email</Th>
                        <Th textAlign='center' fontFamily="'Poppins', sans-serif">Preference</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Guides.map((person) => (
                        <Tr key={person.id}>
                            <Td fontFamily="'Poppins', sans-serif">{person.name}</Td>
                            <Td fontFamily="'Poppins', sans-serif">{person.specialization}</Td>
                            <Td fontFamily="'Poppins', sans-serif">{person.email}</Td>
                            <Td fontFamily="'Poppins', sans-serif" maxW={'250px'}>
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
            <Box display="flex" justifyContent="center" my={6}>
                <Button
                    fontFamily="'Poppins', sans-serif"
                    colorScheme="orange"
                    onClick={handleSubmit}
                    _hover={{ bg: 'orange.600', transform: 'scale(1.05)', transition: 'all 0.2s ease-in-out' }}
                >
                    Submit Preferences
                </Button>
            </Box>

            {/* Modal for error/success messages */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontFamily="'Sanchez', serif">{isSuccess ? 'Success' : 'Error'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody fontFamily="'Poppins', sans-serif">
                        {modalMessage}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme={isSuccess ? 'green' : 'red'} mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};
