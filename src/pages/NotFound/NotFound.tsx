import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <Flex
            flexDir="column"
            bg="main-bg"
            minH="100vh"
            w="full"
            color="white-text"
            p="15rem"
            justify="center"
        >
            <Box textAlign="center">
                <Heading as="h1" fontSize="7xl">404 Not Found</Heading>
                <Link to="/">Back to home 🏡</Link>
            </Box>
        </Flex>
    )

}

export default NotFound;