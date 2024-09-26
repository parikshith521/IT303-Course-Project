import { VStack, Box } from "@chakra-ui/react";
import { NavBar } from '../../components/NavBar';
import { DisplayCards } from '../../components/DisplayCards';

//landing page
export const Home = () => {
    return (
        <>
            <VStack spacing={0} align="stretch">
                <NavBar />
                <DisplayCards />
            </VStack>

        </>
    )
}
