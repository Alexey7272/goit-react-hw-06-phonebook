import { createReducer } from '@reduxjs/toolkit';
import { contactsInitialState as initState } from 'components/defaultContact';
import { addContacts, removeContacts } from './actionCreators';

// export const contactReducer = (state = initState, action ) => {
//     switch(action.type) {
//          case actions.CONTACTS_ADDED: {
//            return [...state, action.payload];
//          }

//          case actions.CONTACTS_REMOVE: {
//            return state.filter((item) => item.id !== action.payload.id);
//          }

//          default: 
//            return state;
//     };
// }

// export const contactReducer = createReducer(initState, {
//     [addContacts]: (state, action) => {
//       state.push(action.payload)
//     },
// });

export const contactReducer = createReducer( initState, (builder) => {
  builder
  .addCase(addContacts, (state, action) => {
    state.push(action.payload)
  })
  .addCase(removeContacts, (state, action) => {
    return state.filter(({id}) => id !== action.payload);
  })
});