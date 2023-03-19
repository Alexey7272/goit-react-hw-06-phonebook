import { createSlice } from "@reduxjs/toolkit";
import { filterInitialState as initState } from "components/defaultFilter";

const filterSlice = createSlice ({
    name: 'filter',
    initialState: initState,
    reducers: {
        addFilter(state, action) {
           return action.payload
        }
    }
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
