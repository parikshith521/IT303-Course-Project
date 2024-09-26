import React, { useState } from 'react';
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
    Spacer,
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
function DisplayCards() {
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
                mt='120px' ml='20%'
            >
                <Heading fontFamily='Oswald'>Welcome Back User, <Text as="span" color='orange.500'>Project Details</Text> Are Given Below: </Heading>
                <Card
                    mt='35px'
                    ml="20px"  // Shift card slightly to the right
                    p="6"
                    boxShadow="lg"
                    borderRadius="md"
                    maxW="85%"  // Set card width
                    transition="background 0.3s ease"  // Smooth transition for background
                    _hover={{ bg: 'orange.400', boxShadow: "xl" }}  // Change background and shadow on hover
                >
                    <Flex justify="space-between" align="center">
                        <Box>
                            <CardHeader>
                                <Heading size='xl' fontFamily='poppins' color="black">Major Project</Heading>
                            </CardHeader>
                            <CardBody fontFamily='poppins'>
                                <Button
                                    colorScheme='orange'
                                    onClick={() => handleViewDetails('major')}
                                    _hover={{ bg: 'orange.300', color: 'white' }}  // Change button color on card hover
                                >
                                    Apply
                                </Button> {/* Open modal on click */}
                            </CardBody>
                        </Box>
                        <Image src={projectImage} alt="Project" boxSize="100px" objectFit="cover" borderRadius='10%' />
                    </Flex>
                </Card>

                <Card
                    mt='30px'
                    ml="20px"  // Shift card slightly to the right
                    p="6"
                    boxShadow="lg"
                    borderRadius="md"
                    maxW="85%"  // Set card width
                    transition="background 0.3s ease"  // Smooth transition for background
                    _hover={{ bg: 'orange.400', boxShadow: "xl" }}  // Change background and shadow on hover
                >
                    <Flex justify="space-between" align="center">
                        <Box>
                            <CardHeader>
                                <Heading size='xl' fontFamily='poppins' color="black">Minor Project</Heading>
                            </CardHeader>
                            <CardBody fontFamily='poppins'>
                                <Button
                                    colorScheme='orange'
                                    onClick={() => handleViewDetails('minor')}
                                    _hover={{ bg: 'orange.300', color: 'white' }}  // Change button color on card hover
                                >
                                    Apply
                                </Button> {/* Open modal on click */}
                            </CardBody>
                        </Box>
                        <Image src={projectImage} alt="Project" boxSize="100px" objectFit="cover" borderRadius='10%' />
                    </Flex>
                </Card>
            </Container>


            {/* Modal for View Details */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="white">
                    <ModalHeader>Your Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody color="black" fontFamily='poppins'>
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


export default DisplayCards;

