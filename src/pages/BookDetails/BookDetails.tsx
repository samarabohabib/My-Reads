import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IBook } from "../../components/Book/Book.types";
import { useAppDispatch } from "../../hooks/hooks";
import { getBooks } from "../../services/get-books";
import { RootState } from "../../store/store";

const BookDetails: React.FC = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const bookId = params.bookId;

    const books: IBook[] = useSelector((state: RootState) => state.books.books);
    const book = useSelector((state: RootState) => state.books).books.find(book => book.id === bookId);

    useEffect(() => {
        if (books.length === 0) {
            dispatch(getBooks());
        }
    }, [books.length, dispatch]);

    if (undefined === book) {

        return (
            <h1>Book is Not Found</h1>
        );
    }

    return (
        <Flex
        flexDir="column"
        bg="main-bg"
        minH="100vh"
        w="full"
        color="white-text"
        p="5rem"
        >
            <Flex
                flexDir="row">

                <Box pr="2rem">
                    <Image rounded="md" width="50vh" height="50vh" src={book.imageLinks.thumbnail} alt={book.title} />
                </Box>
                <Box>
                    <Heading fontSize="28px" lineHeight="3rem">{book.title}</Heading>
                    <Heading fontSize="20px">{book.subtitle}</Heading>
                    <Text size="xs" mt="3" fontSize="14px">
                        <b>By</b> {book.authors.slice().join(', ')}
                    </Text>
                    <Text size="xs" mt="2" fontSize="14px">
                        <b>Publisher: </b>{book.publisher || 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Rate:</b> {book.averageRating ? book.averageRating + `(${book.ratingsCount})` : 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Content Version:</b> {book.contentVersion || 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Category:</b> {book.categories?.slice().join(', ') || 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Language:</b> {book.language.toUpperCase() || 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Shelf:</b> {book.shelf || 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Print Type:</b> {book.printType || 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Preview Link:</b> {book.previewLink || 'Unknown'}
                    </Text>
                    <Text mt="2" fontSize="14px">
                        <b>Info Link:</b> {book.infoLink || 'Unknown'}
                    </Text>
                </Box>
            </Flex>
            <Box>
                <Text mt="10" fontSize="18px">
                    {book.description || 'Unknown'}
                </Text>
            </Box>

        </Flex>
    );
}

export default BookDetails;