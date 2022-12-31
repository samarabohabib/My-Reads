import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../components/Book/Book.types";
import { Column } from "../../components/Column/Column.types";


const initialState: {books: Array<IBook>, columns: Array<Column>, searchQuery: string, apiError: boolean} = {
    books: [], columns: [], searchQuery: '', apiError: false
};


const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setColumns: (state, action) => {
            state.columns = action.payload
        },
        setColumnBooks: (state, action) => {
            const column = state.columns.find(col => col.id === action.payload.columnId)
            if (column !== undefined) {
                column.bookIds = action.payload.bookIds;
            }
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setApiError: (state, action) => {
            state.apiError = action.payload;
        }
    }
});

export const booksActions = bookSlice.actions;
export default bookSlice;