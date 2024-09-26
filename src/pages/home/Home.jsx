import { VStack, Box } from "@chakra-ui/react";
import { NavBar } from '../../components/NavBar';
import { DisplayCards } from '../../components/DisplayCards';

export const Home = () => {
    return (
        <>
            <VStack spacing={0} align="stretch">
                <Box
                    w="100%"
                    position="sticky"
                    top={0}
                    zIndex={1000}
                    bg="white"  // Ensure the background stays visible
                    boxShadow="md"  // Optional: Add a shadow to distinguish from content
                >
                    <NavBar />
                </Box>

                <DisplayCards />
            </VStack>

        </>
    )
}
