import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import Book from "../Book";
import { IBook } from "../Book/Book.types";
import { Column as ColumnType } from "./Column.types";

const Column: React.FC<{column: ColumnType, books: Array<IBook>}> = ({ column, books }) => {

  const searchQuery = useSelector((state: RootState) => state.books.searchQuery);

  return (
    <Flex rounded="3px" bg="column-bg" w="500px" flexDir="column" id={column.id}>
      <Flex
        align="center"
        h="60px"
        bg="column-header-bg"
        rounded="3px 3px 0 0"
        px="1.5rem"
        mb="1.5rem"
        minH="60px"
      >
          <Text fontSize="17px" fontWeight={600} color="subtle-text" data-testid="colTitle">
            {column.title}
          </Text>

        
      </Flex>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <Flex
            px="1.3rem"
            flex={1}
            flexDir="column"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {books.map((book, i) => {
              
              if (book && ((book.title + ' ' + book.subtitle || '').toLowerCase().indexOf(searchQuery.trim().toLowerCase())) === -1 ) return null;

              return <Draggable key={book.id} draggableId={`${book.id}`} index={book.index as number}>
                    {(draggableProvided, draggableSnapshot) => (
                      <Flex
                        mb="1rem"
                        h="250px"
                        bg="card-bg"
                        rounded="3px"
                        p="1rem"
                        outline="2px solid"
                        justify="space-evenly"
                        outlineColor={
                          draggableSnapshot.isDragging
                            ? "card-border"
                            : "transparent"
                        }
                        boxShadow={
                          draggableSnapshot.isDragging
                            ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                            : "unset"
                        }
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        data-testid="bookDraggable"
                      >
                          <Link to={'/book-details/' + book.id}>
                            <Book {...draggableProvided.draggableProps} book={book} />
                          </Link>

                      </Flex>
                    )}
                  </Draggable>
            })}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;