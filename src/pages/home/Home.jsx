import { VStack } from "@chakra-ui/react";
import { NavBar } from '../../components/NavBar';
import { DisplayCards } from '../../components/DisplayCards';

export const Home = () => {
    return (
        <>
            <VStack>
                <NavBar />
                <DisplayCards />
            </VStack>
        </>
    )
}
