import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import { IBook } from "./Book.types";

const Book: React.FC<{book: IBook}> = ({book}) => {

    return (
        <Flex justify="space-around">

            <Box maxWidth="40%">
                <Image height="15vh" width="15vh" src={book.imageLinks?.smallThumbnail} alt={book.title} />
            </Box>

            <Box ml="5" maxWidth="60%">
                <Heading size="s" fontSize="16px">
                    {book.title}
                </Heading>
                <Heading size="xs" fontSize="14px">
                    {book.subtitle}
                </Heading>
                <Text size="xs" mt="3" fontSize="14px">
                    <b>By</b> {book.authors?.slice().join(', ')}
                </Text>
                <Text size="xs" mt="2" fontSize="14px">
                    <b>Publisher: </b>{book.publisher || 'Unknown'}
                </Text>
                <Text mt="2" fontSize="14px">
                    <b>Rate:</b> {book.averageRating || 'Unknown'}
                </Text>
            </Box>

        </Flex>
    

    );

}

export default Book;