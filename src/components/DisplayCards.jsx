import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Card,
    CardHeader,
    Heading,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    CardFooter,
    HStack,
    Spacer
} from '@chakra-ui/react';


//fetch assets
import projectImage from '../assets/project.png';

export const DisplayCards = () => {

    //overlay setup
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalMessage, setModalMessage] = useState('');

    //handling ineligibilities
    const handleViewDetails = (projectType) => {
        if (projectType === 'major') {
            setModalMessage('You are have already been alloted a Guide!');
        } else {
            setModalMessage('You are not eligible to apply , because you have gotten an Internship!');
        }
        onOpen();
    };

    return (
        <>
            <Container
                maxW={{ base: "95%", sm: "90%", md: "80%", lg: "container.lg", xl: "container.xl" }}
                my="120px"
                mx="auto"
                // Center the container horizontally
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
                        <Button mr="5px"
                            colorScheme="orange"
                            onClick={() => handleViewDetails('major')}
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
                        <Button mr="5px"
                            colorScheme="orange"
                            onClick={() => handleViewDetails('minor')}
                            _hover={{ bg: 'orange.300', color: 'white' }}
                            mb={{ base: 2, md: 0 }}
                        >
                            Apply
                        </Button>
                        <Link to="/minor-allocation">
                            <Button ml="5px"
                                colorScheme="orange"
                                _hover={{ bg: 'orange.300', color: 'white' }}
                            >
                                Apply
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </Container>



            {/* Modal for View Details */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="white">
                    <ModalHeader>Your Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody color="black" fontFamily="'Poppins', serif">
                        {modalMessage}
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



