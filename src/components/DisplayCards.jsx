import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Changed useHistory to useNavigate
import {
    Card, CardHeader, CardFooter, HStack, Heading, Spacer, Image, Button,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
    ModalFooter, FormControl, FormLabel, Input, AlertDialog,
    AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody,
    AlertDialogFooter, Container, useDisclosure
} from '@chakra-ui/react';

// Fetch assets
import projectImage from '../assets/project.png';

export const DisplayCards = () => {
    const navigate = useNavigate(); // Updated for React Router v6

    // Modal and Alert Dialog hooks
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();

    // Internship Form State
    const [internshipDetails, setInternshipDetails] = useState({
        duration: '',
        companyName: '',
        managerName: '',
        studentName: ''
    });

    // Handling form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInternshipDetails(prevState => ({ ...prevState, [name]: value }));
    };

    // Handling Internship decision
    const handleInternshipDecision = (decision) => {
        if (decision === 'yes') {
            onAlertClose(); // Close alert dialog
            onModalOpen();  // Open modal to fill in internship details
        } else if (decision === 'no') {
            navigate('/minor-allocation'); // Redirect to preference page
        }
    };

    return (
        <>
            <Container
                maxW={{ base: "95%", sm: "90%", md: "80%", lg: "container.lg", xl: "container.xl" }}
                my="120px"
                mx="auto"
                alignContent="center"
                justifyContent="center"
            >
                <Heading fontFamily="'Sanchez', serif" textAlign="center">
                    Project Details Are Given Below
                </Heading>



                {/* Major Project Card */}
                <Card
                    mt="50px"
                    mx="auto"
                    p="0"
                    boxShadow="lg"
                    borderRadius="lg"
                    maxW="85%"
                    _hover={{ boxShadow: "xl" }}
                >
                    <CardHeader borderTopRadius="md" _hover={{ bg: 'orange.400' }} transition="background 0.3s ease">
                        <HStack>
                            <Heading p="5" size={['md', 'lg']} fontFamily="'Poppins', serif" color="black">
                                Major Project
                            </Heading>
                            <Spacer />
                            <Image mr="10px" src={projectImage} alt="Project" boxSize={['50px', '80px']} objectFit="cover" mt={{ base: 4, md: 0 }} />
                        </HStack>
                    </CardHeader>
                    <CardFooter px="10" mb="2" fontFamily="'Poppins', serif">
                        {/* First Apply Button triggers modal */}
                        <Button
                            mr="5px"
                            colorScheme="orange"
                            onClick={onOpen}  // Opens the modal
                            _hover={{ bg: 'orange.300', color: 'white' }}
                            mb={{ base: 2, md: 0 }}
                        >
                            Apply
                        </Button>
                        <Link to="/major-allocation">
                            <Button ml="5px"
                                colorScheme="orange"
                                _hover={{ bg: 'orange.300', color: 'white' }}
                            >
                                Apply
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>


                {/* Minor Project Card */}
                <Card
                    mt="50px"
                    mx="auto"
                    p="0"
                    boxShadow="lg"
                    borderRadius="lg"
                    maxW="85%"
                    _hover={{ boxShadow: "xl" }}
                >
                    <CardHeader borderTopRadius="md" _hover={{ bg: 'orange.400' }} transition="background 0.3s ease">
                        <HStack>
                            <Heading p="5" size={['md', 'lg']} fontFamily="'Poppins', serif" color="black">
                                Minor Project
                            </Heading>
                            <Spacer />
                            <Image mr="10px" src={projectImage} alt="Project" boxSize={['50px', '80px']} objectFit="cover" mt={{ base: 4, md: 0 }} />
                        </HStack>
                    </CardHeader>
                    <CardFooter px="10" mb="2" fontFamily="'Poppins', serif">
                        <Button
                            mr="5px"
                            colorScheme="orange"
                            onClick={onAlertOpen} // Open internship decision dialog
                            _hover={{ bg: 'orange.300', color: 'white' }}
                            mb={{ base: 2, md: 0 }}
                        >
                            Apply
                        </Button>
                        <Link to="/minor-allocation">
                            <Button ml="5px" colorScheme="orange" _hover={{ bg: 'orange.300', color: 'white' }}>
                                Apply
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </Container>

            {/* Alert Dialog for Internship Question */}
            <AlertDialog
                isOpen={isAlertOpen}
                leastDestructiveRef={undefined}
                onClose={onAlertClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Internship Confirmation
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Have you done an internship?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button onClick={() => handleInternshipDecision('no')} colorScheme="orange">
                                No
                            </Button>
                            <Button onClick={() => handleInternshipDecision('yes')} ml={3}>
                                Yes
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

            {/* Modal for Internship Details */}
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Internship Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Duration</FormLabel>
                            <Input
                                placeholder="Enter duration"
                                name="duration"
                                value={internshipDetails.duration}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Company Name</FormLabel>
                            <Input
                                placeholder="Enter company name"
                                name="companyName"
                                value={internshipDetails.companyName}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Manager Name</FormLabel>
                            <Input
                                placeholder="Enter manager name"
                                name="managerName"
                                value={internshipDetails.managerName}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Student Name</FormLabel>
                            <Input
                                placeholder="Enter your name"
                                name="studentName"
                                value={internshipDetails.studentName}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="orange" mr={3} onClick={onModalClose}>
                            Submit
                        </Button>
                        <Button onClick={onModalClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* Modal for "You have been allotted a Guide!" */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Notice</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        You have been allotted a Guide!
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="orange" onClick={onClose}>
                            Okay
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default DisplayCards;
