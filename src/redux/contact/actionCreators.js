import { createAction } from '@reduxjs/toolkit';
import * as actions from './actionTypes';

// export const addContacts = (newContact) => {
//     return {
//         type: actions.CONTACTS_ADDED,
//         payload: newContact,
//     };
// };

export const addContacts = createAction(actions.CONTACTS_ADDED);
export const removeContacts = createAction(actions.CONTACTS_REMOVE)