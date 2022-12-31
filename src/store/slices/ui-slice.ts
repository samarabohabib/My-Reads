import { createSlice } from "@reduxjs/toolkit";

const initialState: {showSpinner: boolean} = {
    showSpinner: false
};


const uiSlice = createSlice({
    name: 'uiSlice',
    initialState,
    reducers: {
        setShowSpinner: (state, action) => {
            state.showSpinner = action.payload
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;