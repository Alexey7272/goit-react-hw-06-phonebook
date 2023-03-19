import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { contactReducer } from './contact/slice'
import { filterReducer } from './filter/slice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
}))

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
});

export let persistor = persistStore(store);
