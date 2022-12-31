import { IBook } from "../components/Book/Book.types";
import { Column } from "../components/Column/Column.types";
import { booksActions } from "../store/slices/books-slice";
import { uiActions } from "../store/slices/ui-slice";
import { AppDispatch } from "../store/store";
import { getAll } from "./booksAPI";


/**
 * call schools data service
 */
export const getBooks = () => {
    return async (dispatch: AppDispatch) => {
        
        dispatch(booksActions.setApiError(false));
        dispatch(uiActions.setShowSpinner(true));

        const sendRequest = async () => {
            const response = await getAll();

            if (!response.ok) {
                throw new Error('Internal Server Error!');
            }

            return response;
        }

        try {
            const response = await sendRequest(); // send request
            const jsonResponse = await response.json();
            
            const books: IBook[] = jsonResponse.books;
            
            books.map((item, index) => {
                item.index = index;
                return item;
            });
            
            dispatch(booksActions.setBooks(books));
            dispatch(booksActions.setColumns(constructColumns(books)));
            dispatch(uiActions.setShowSpinner(false));

        } catch (error) {
            
            dispatch(uiActions.setShowSpinner(false));
            dispatch(booksActions.setApiError(true));
            throw new Error('Internal Server Error!');
        }
    }
}


const constructColumns = (data: IBook[]): Column[] => {

    let wantToReadBooks: number[] = [];
    let currentlyReadingBooks: number[] = [];
    let readBooks: number[] = [];

    data.forEach((item: IBook) => {
        switch (item.shelf) {
            case 'wantToRead':
                wantToReadBooks.push(item.index as number);
                break;                
            case 'currentlyReading':
                currentlyReadingBooks.push(item.index as number);
                break;                
            case 'read':
                readBooks.push(item.index as number);
                break;
        }
    });

    return [
        {
            id: "wantToRead",
            title: "Want To Read",
            bookIds: [...wantToReadBooks],
        },
        {
            id: "currentlyReading",
            title: "Currently Reading",
            bookIds: [...currentlyReadingBooks],
        },
        {
            id: "read",
            title: "Read",
            bookIds: [...readBooks],
        },
    ];
}
