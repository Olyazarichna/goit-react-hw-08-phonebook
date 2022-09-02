import { configureStore } from '@reduxjs/toolkit';

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

import { authSlice } from './authSlice';
import { authApi } from '../services/authApi';
import { contactsApi } from 'services/contactsApi';
import { filterSlice } from './filterSlice';

const persistConfig = {
  key: 'users',
  version: 1,
  storage,
};
export const persistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
export const persistedFilterReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authSlice.name]: persistedReducer,
    [filterSlice.name]: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, contactsApi.middleware),
});

export const persistor = persistStore(store);
