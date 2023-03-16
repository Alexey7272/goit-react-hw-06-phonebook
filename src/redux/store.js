// 
// {
//   contacts: [],
//   filter: ""
// }
// 
// Add contact
// Remove contact 
// Filter contact
// 
// Reduce

import { legacy_createStore as createStore } from 'redux'
import { contactReducer } from './reducer'
import { devToolsEnhancer } from '@redux-devtools/extension';

const enchancer = devToolsEnhancer();

// const rootReducers = combineReducers({
//     contacts: contactReducer,
// })

export const store = createStore(contactReducer, enchancer);