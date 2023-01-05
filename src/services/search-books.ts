import { IBook } from "../components/Book/Book.types";
import { booksActions } from "../store/slices/books-slice";
import { AppDispatch } from "../store/store";
import { search } from "./booksAPI";


/**
 * call search books data service
 */
export const searchBooks = (searchQuery: string = "") => {

    return async (dispatch: AppDispatch, getState: any) => {

        dispatch(booksActions.setColumnBooks({
            columnId: 'uncategorized',
            bookIds: []
        }));

        if (searchQuery.length === 0) {

            return;
        }

        const sendRequest = async () => {

            const response = await search(searchQuery, []);

            if (!response.ok) {
                throw new Error('Internal Server Error!');
            }

            return response;
        }

        try {
            const response = await sendRequest(); // send request
                
            const jsonResponse = await response.json();
            const books: IBook[]|any = jsonResponse.books;
                if (books.items !== undefined) {
                    return;
                }
            

            let bookIds: number[] = [];
            books.map((item:IBook, index: number) => {
                item.index = index + 10;
                bookIds.push(item.index);
                return item;
            });

            dispatch(booksActions.setBooks(books));
            dispatch(booksActions.setUncategorizedBooks(books));
            dispatch(booksActions.setColumnBooks({
                columnId: 'uncategorized',
                bookIds
            }));

        } catch (error) {

            throw new Error('Internal Server Error!');
        }
    }
}