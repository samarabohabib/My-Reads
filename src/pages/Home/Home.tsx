

import { Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import BarLoader from "react-spinners/ClipLoader";
import { IBook } from "../../components/Book/Book.types";
import Column from "../../components/Column";
import { Column as ColumnType } from "../../components/Column/Column.types";
import { useAppDispatch } from "../../hooks/hooks";
import { update } from "../../services/booksAPI";
import { getBooks } from "../../services/get-books";
import { booksActions } from "../../store/slices/books-slice";
import { RootState } from "../../store/store";
import Error from "../../components/Error";
import { searchBooks } from "../../services/search-books";


const Home: React.FC = () => {

    const dispatch = useAppDispatch();


    const booksState = useSelector((state: RootState) => state.books);
    const showSpinner = useSelector((state: RootState) => state.ui.showSpinner);
    const apiError = useSelector((state: RootState) => state.books.apiError);


    useEffect(() => {

        dispatch(getBooks());

    }, [dispatch]);
    

    const onDragEnd = (result: any) => {
        

        const { destination, source } = result;

        // If user tries to drop in an unknown destination
        if (!destination || destination.droppableId === 'uncategorized') return;

    
        // if the user drags and drops back in the same position
        if ( destination.droppableId === source.droppableId) {
          return;
        }
    
        // If the user drops within the same column but in a different position
        const sourceCol: ColumnType = booksState.columns.find(column => source.droppableId === column.id) as ColumnType;
        const destinationCol: ColumnType = booksState.columns.find(column => destination.droppableId === column.id) as ColumnType;
        const startBookIds = Array.from(sourceCol.bookIds);
        const srcBookIndex = startBookIds.findIndex(id => id === source.index);
        const [removed] = startBookIds.splice(srcBookIndex, 1);
        
        booksState.columns.forEach(column => {

            if (column.id === sourceCol.id) {
                dispatch(booksActions.setColumnBooks({columnId: column.id, bookIds: startBookIds}));
            }

            if (column.id === destinationCol.id) {
                const endBookIds = Array.from(destinationCol.bookIds);
                endBookIds.splice(srcBookIndex, 0, removed);
                dispatch(booksActions.setColumnBooks({columnId: column.id, bookIds: endBookIds}));
            }
        });


        const book: IBook = booksState.books.find(book => book.index === source.index) as IBook;
        let colId = destinationCol.id === "uncategorized" ? "None" : destinationCol.id;
        update(book, colId).then(res => console.log(res));
    
    };

    const onChangeInput = (value: string) => {
        dispatch(booksActions.setSearchQuery(value));
        dispatch(searchBooks(value));
    }

    if (showSpinner) {
        return (
            <Flex
                flexDir="column"
                bg="main-bg"
                minH="100vh"
                w="full"
                color="white-text"
                justify="center"
                alignItems="center"
            >
                <BarLoader
                color='#E8E8EA'
                loading={true}
                size={150}
                />
            </Flex>
        );
    }

    if (apiError) {
        return (
            <Error />
        );
    }


    return (

        <DragDropContext onDragEnd={onDragEnd}>
            <Flex
                flexDir="column"
                bg="main-bg"
                minH="100vh"
                w="full"
                color="white-text"
                pb="2rem"
            >
                <Flex py="2rem" flexDir="column" align="center">
                    <Heading fontSize="3xl" fontWeight={600}>
                        My Reads
                    </Heading>
                    <Text fontSize="20px" fontWeight={600} color="subtle-text">
                        enjoy drag and drop books
                    </Text>
                </Flex>
                <Flex justify="center" pb="20px">
                    <Input width="60%" height="50px"  placeholder='Search For A Book..' onChange={(e) => onChangeInput(e.target.value.toLowerCase())} />
                </Flex>

                <Flex justify="space-between" px="3rem">

                    {booksState.columns.map(column => {
                        
                        const books: Array<IBook> = [];
                        column.bookIds.forEach((index) => {      
                            const book =  booksState.books.find(book => book.index === index);
                            if (book) {
                                books.push(book);
                            } 
                        } );

                        return <Column key={column.id} column={column} books={books} />;
                    })}
                    
                </Flex>
            </Flex>
        </DragDropContext>

    );

}

export default Home;