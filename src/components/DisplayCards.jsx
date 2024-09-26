import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    Heading,
    Button,
    Flex,
    Image,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    ChakraProvider,
    Text
} from '@chakra-ui/react';



import projectImage from '../assets/project.png';  // Ensure the path is correct

export const DisplayCards = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalMessage, setModalMessage] = useState('');

    const handleViewDetails = (projectType) => {
        if (projectType === 'major') {
            setModalMessage('You are eligible to Apply!');
        } else {
            setModalMessage('You are not eligible to apply , because you have gotten an Internship!');
        }
        onOpen(); // Open the modal
    };
    return (
        <>
            <Container
                maxW={{ base: "95%", sm: "90%", md: "80%", lg: "container.lg", xl: "container.xl" }}
                mt="120px"
                mx="auto"  // Center the container horizontally
                alignContent="center"
                justifyContent="center"
            >
                <Heading fontFamily="'Poppins', serif" textAlign="center">
                    Project Details Are Given Below
                </Heading>

                {/* Major Project Card */}
                <Card
                    mt="35px"
                    mx="auto"  // Center the card horizontally
                    p="6"
                    boxShadow="lg"
                    borderRadius="md"
                    maxW="85%"  // Set card width, making it responsive
                    transition="background 0.3s ease"  // Smooth transition for background
                    _hover={{ bg: 'orange.400', boxShadow: "xl" }}  // Change background and shadow on hover
                >
                    <Flex justify="space-between" align="center">
                        <Box>
                            <CardHeader>
                                <Heading size="xl" fontFamily="'Poppins', serif" color="black">
                                    Major Project
                                </Heading>
                            </CardHeader>
                            <CardBody fontFamily="'Poppins', serif">
                                <Button
                                    colorScheme="orange"
                                    onClick={() => handleViewDetails('major')}
                                    _hover={{ bg: 'orange.300', color: 'white' }}  // Change button color on card hover
                                >
                                    Apply
                                </Button> {/* Open modal on click */}
                                {/* Fill Preferences Button */}
                                <Link to="/major-allocation">
                                    <Button
                                        ml={4}  // Add margin between buttons
                                        colorScheme="orange"
                                        _hover={{ bg: 'orange.300', color: 'white' }}  // Hover effect for the button
                                    >
                                        Apply
                                    </Button>
                                </Link>
                            </CardBody>
                        </Box>
                        <Image src={projectImage} alt="Project" boxSize="100px" objectFit="cover" borderRadius="10%" />
                    </Flex>
                </Card>

                {/* Minor Project Card */}
                <Card
                    mt="30px"
                    mb="30px"  // Added margin-bottom to the second card
                    mx="auto"  // Center the card horizontally
                    p="6"
                    boxShadow="lg"
                    borderRadius="md"
                    maxW="85%"  // Set card width, making it responsive
                    transition="background 0.3s ease"  // Smooth transition for background
                    _hover={{ bg: 'orange.400', boxShadow: "xl" }}  // Change background and shadow on hover
                >
                    <Flex justify="space-between" align="center">
                        <Box>
                            <CardHeader>
                                <Heading size="xl" fontFamily="'Poppins', serif" color="black">
                                    Minor Project
                                </Heading>
                            </CardHeader>
                            <CardBody fontFamily="'Poppins', serif">
                                <Button
                                    colorScheme="orange"
                                    onClick={() => handleViewDetails('minor')}
                                    _hover={{ bg: 'orange.300', color: 'white' }}  // Change button color on card hover
                                >
                                    Apply
                                </Button> {/* Open modal on click */}
                                {/* Fill Preferences Button */}
                                <Link to="/minor-allocation">
                                    <Button
                                        ml={4}  // Add margin between buttons
                                        colorScheme="orange"
                                        _hover={{ bg: 'orange.300', color: 'white' }}  // Hover effect for the button
                                    >
                                        Apply
                                    </Button>
                                </Link>
                            </CardBody>
                        </Box>
                        <Image src={projectImage} alt="Project" boxSize="100px" objectFit="cover" borderRadius="10%" />
                    </Flex>
                </Card>
            </Container>


            {/* Modal for View Details */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="white">
                    <ModalHeader>Your Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody color="black" fontFamily="'Poppins', serif">
                        {modalMessage} {/* Display the relevant message */}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="orange" onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}



