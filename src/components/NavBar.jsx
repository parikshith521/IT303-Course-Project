import React from 'react';
import {
    Flex, Box, Spacer, Image, HStack
} from '@chakra-ui/react';
import profileIcon from '../assets/profile-user.png'; // Import the profile icon

export const NavBar = () => {
    return (
        <Flex w="100vw" bg='white' p={4}>
            <Box py="1" px="4" color='black' fontSize='4xl' cursor='pointer' fontFamily="'Sanchez', serif" fontWeight="bold" borderRadius="md"
                transition="background 0.3s ease, color 0.3s ease"
                _hover={{ bg: 'orange.400', color: 'white' }}>Iris</Box>
            <Spacer />
            <HStack align="center" >
                <Box p='4' color='black' fontSize={['large', '2xl']} cursor='pointer' fontFamily='poppins' transition="background 0.3s ease, color 0.3s ease"
                    borderRadius="md" _hover={{ bg: 'orange.400', color: 'white' }}>Home</Box>
                <Box p='4' color='black' fontSize={['large', '2xl']} display="flex" alignItems="center" cursor='pointer' fontFamily='poppins' transition="background 0.3s ease, color 0.3s ease"
                    borderRadius="md" _hover={{ bg: 'orange.400', color: 'white' }}>
                    Profile
                    <Image src={profileIcon} alt="Profile Icon" boxSize="40px" ml={8} cursor='pointer' /> {/* Adding the icon */}
                </Box>
            </HStack>
        </Flex >
    );
}

