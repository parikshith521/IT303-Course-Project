import { Center, VStack } from "@chakra-ui/react";
import { PreferenceForm } from './PreferenceForm'
import { NavBar } from "../../components/NavBar";
export const MinorAllocation = () => {
    return (
        <>
            <VStack w={'100vw'} h={'100vh'}>
                <NavBar />
                <PreferenceForm />
            </VStack>
        </>
    );
}
