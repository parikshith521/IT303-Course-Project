import React from 'react';
import {
    Flex, Box, Spacer, Image,
} from '@chakra-ui/react';
import profileIcon from '../assets/profile-user.png'; // Import the profile icon

function NavBar() {
    return (
        <Flex bg='white' p={4}>
            <Box p='4' color='black' fontSize='2xl' cursor='pointer' fontFamily='Oswald' borderRadius="md"
                transition="background 0.3s ease, color 0.3s ease"
                _hover={{ bg: 'orange.400', color: 'white' }}>IRIS</Box>
            <Spacer />
            <Box p='4' color='black' fontSize='2xl' cursor='pointer' fontFamily='poppins' transition="background 0.3s ease, color 0.3s ease"
                borderRadius="md" _hover={{ bg: 'orange.400', color: 'white' }}>Home</Box>
            <Box p='4' color='black' fontSize='2xl' display="flex" alignItems="center" cursor='pointer' fontFamily='poppins' transition="background 0.3s ease, color 0.3s ease"
                borderRadius="md" _hover={{ bg: 'orange.400', color: 'white' }}>
                Profile
                <Image src={profileIcon} alt="Profile Icon" boxSize="40px" ml={8} cursor='pointer' /> {/* Adding the icon */}
            </Box>
        </Flex>
    );
}

export default NavBar;
