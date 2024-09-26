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
                border="1px solid"  // Add a border to the container
                borderColor="gray.200"  // Light gray border
                boxShadow="md"  // Initial shadow
                transition="box-shadow 0.3s ease"  // Smooth shadow transition
                _hover={{ boxShadow: "xl" }}  // Shadow effect on hover
            >
                <Heading fontFamily="'Poppins', serif" textAlign="center">
                    Project Details Are Given Below
                </Heading>

                {/* Major Project Card */}
                <Card
                    mt="50px"  // Increased top margin
                    mx="auto"  // Center the card horizontally
                    p="6"
                    boxShadow="lg"
                    borderRadius="md"
                    maxW="85%"  // Set card width, making it responsive
                    transition="background 0.3s ease"  // Smooth transition for background
                    _hover={{ bg: 'orange.400', boxShadow: "xl" }}  // Change background and shadow on hover
                >
                    <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
                        <Box textAlign={{ base: "center", md: "left" }}>
                            <CardHeader>
                                <Heading size="xl" fontFamily="'Poppins', serif" color="black">
                                    Major Project
                                </Heading>
                            </CardHeader>
                            <CardBody fontFamily="'Poppins', serif">
                                <Button
                                    colorScheme="orange"
                                    onClick={() => handleViewDetails('major')}
                                    _hover={{ bg: 'orange.300', color: 'white' }}
                                    mb={{ base: 2, md: 0 }}  // Add margin between buttons for mobile
                                >
                                    Apply
                                </Button>
                                <Link to="/major-allocation">
                                    <Button
                                        ml={{ md: 4 }}
                                        colorScheme="orange"
                                        _hover={{ bg: 'orange.300', color: 'white' }}
                                    >
                                        Apply
                                    </Button>
                                </Link>
                            </CardBody>
                        </Box>
                        <Image src={projectImage} alt="Project" boxSize="100px" objectFit="cover" borderRadius="10%" mt={{ base: 4, md: 0 }} />
                    </Flex>
                </Card>

                {/* Minor Project Card */}
                <Card
                    mt="50px"  // Increased top margin
                    mb="50px"  // Increased bottom margin
                    mx="auto"  // Center the card horizontally
                    p="6"
                    boxShadow="lg"
                    borderRadius="md"
                    maxW="85%"  // Set card width, making it responsive
                    transition="background 0.3s ease"  // Smooth transition for background
                    _hover={{ bg: 'orange.400', boxShadow: "xl" }}  // Change background and shadow on hover
                >
                    <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }}>
                        <Box textAlign={{ base: "center", md: "left" }}>
                            <CardHeader>
                                <Heading size="xl" fontFamily="'Poppins', serif" color="black">
                                    Minor Project
                                </Heading>
                            </CardHeader>
                            <CardBody fontFamily="'Poppins', serif">
                                <Button
                                    colorScheme="orange"
                                    onClick={() => handleViewDetails('minor')}
                                    _hover={{ bg: 'orange.300', color: 'white' }}
                                    mb={{ base: 2, md: 0 }}  // Add margin between buttons for mobile
                                >
                                    Apply
                                </Button>
                                <Link to="/minor-allocation">
                                    <Button
                                        ml={{ md: 4 }}
                                        colorScheme="orange"
                                        _hover={{ bg: 'orange.300', color: 'white' }}
                                    >
                                        Apply
                                    </Button>
                                </Link>
                            </CardBody>
                        </Box>
                        <Image src={projectImage} alt="Project" boxSize="100px" objectFit="cover" borderRadius="10%" mt={{ base: 4, md: 0 }} />
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



