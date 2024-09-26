import React, { useState } from 'react';
import {
    Box, Text, Table, Thead, Tbody, Tr, Th, Td, Input, Button, Heading,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';

//import sample guide data
import { Guides } from './GuideData';

//component that displays a prefence form for guide allocation
export const PreferenceForm = () => {

    // static setup to store preferences & messages
    const [preferences, setPreferences] = useState(
        Guides.reduce((acc, person) => {
            acc[person.id] = '';
            return acc;
        }, {})
    );

    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handlePreferenceChange = (id, value) => {
        setPreferences({
            ...preferences,
            [id]: value,
        });
    };

    // validating user inputs
    const validatePreferences = () => {
        const values = Object.values(preferences);

        if (values.some(value => value === '')) {
            return `All fields must contain numbers between 1 and ${Guides.length}.`;
        }

        const invalidValues = values.filter(value => value < 1 || value > Guides.length);
        if (invalidValues.length > 0) {
            return `All numbers must be between 1 and ${Guides.length}.`;
        }

        const uniqueValues = new Set(values);
        if (uniqueValues.size !== values.length) {
            return 'Each number must be unique.';
        }

        return '';
    };

    // submit handler that's connected to the modal
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
        <Box
            maxW="100vw"
            maxH="100vh"
            mx={["10px", "20px", "40px"]}
            mt={8}
            py={4}
            px={['10px', '20px', '30px', '150px']}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            overflowX="auto"
        >
            <Heading fontFamily="'Sanchez', serif" size={['lg', 'xl']} textAlign="center" mt={6} mb={8}>
                Major Project Allocation Form
            </Heading>

            <Text fontFamily="'Poppins', sans-serif" textAlign="center" mb={6} fontSize={['sm', 'md']}>
                Enter Guide Preference Order (1 being the highest preference)
            </Text>

            {/* Make table responsive */}
            <Box overflowX="auto">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th textAlign="center" fontFamily="'Poppins', sans-serif" fontSize={['xs', 'sm']}>Name</Th>
                            <Th textAlign="center" fontFamily="'Poppins', sans-serif" fontSize={['xs', 'sm']}>Specialization</Th>
                            <Th textAlign="center" fontFamily="'Poppins', sans-serif" fontSize={['xs', 'sm']}>Email</Th>
                            <Th textAlign="center" fontFamily="'Poppins', sans-serif" fontSize={['xs', 'sm']}>Preference</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Guides.map((person) => (
                            <Tr key={person.id}>
                                <Td fontFamily="'Poppins', sans-serif" fontSize={['xs', 'sm']}>{person.name}</Td>
                                <Td fontFamily="'Poppins', sans-serif" fontSize={['xs', 'sm']}>{person.specialization}</Td>
                                <Td fontFamily="'Poppins', sans-serif" fontSize={['xs', 'sm']}>{person.email}</Td>
                                <Td fontFamily="'Poppins', sans-serif" maxW={['100px', '250px']} overflowX="hidden">
                                    <Input
                                        type="number"
                                        placeholder="Enter preference"
                                        value={preferences[person.id]}
                                        onChange={(e) => handlePreferenceChange(person.id, e.target.value)}
                                        fontSize={['xs', 'sm']}

                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <Box display="flex" justifyContent="center" my={6}>
                <Button
                    fontFamily="'Poppins', sans-serif"
                    colorScheme="orange"
                    onClick={handleSubmit}
                    _hover={{ bg: 'orange.600', transform: 'scale(1.05)', transition: 'all 0.2s ease-in-out' }}
                    fontSize={['xs', 'md']}
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
