import { contactsInitialState as initState } from 'components/defaultContact';
import * as actions from './actionTypes';

export const contactReducer = (state = initState, action ) => {
    switch(action.type) {
         case actions.CONTACTS_ADDED: {
           return [...state, action.payload];
         }

         case actions.CONTACTS_REMOVE: {
           return state.filter((item) => item.id !== action.payload.id);
         }

         default: 
           return state;
    };
}