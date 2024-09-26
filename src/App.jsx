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
} from '@chakra-ui/react';

import NavBar from './components/NavBar';

import projectImage from './assets/project.png';  // Ensure the path is correct
import DisplayCards from './components/DisplayCards';


function App() {


  return (
    <>
      <NavBar />



      <DisplayCards />
    </>
  );
}

export default App;
// Wrap the App in ChakraProvider (if not already in your entry point)
