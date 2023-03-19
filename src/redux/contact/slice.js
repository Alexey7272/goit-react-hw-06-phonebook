import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState as initState } from "components/defaultContact";

const contactsSlice = createSlice({
    name: 'contact',
    initialState: initState,
    reducers: {
        addContacts(state, action) {
            state.push(action.payload)
        },
        removeContact(state, action) {
            return state.filter(({id}) => id !== action.payload);
        },
    }
});

export const {addContacts, removeContact} = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
