import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './features/filtersSlice/filtersSlice';
import { persistStore } from 'redux-persist';
import { persistedPhonebookReducer } from './features/phonebookSlice/phonebookSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    phonebook: persistedPhonebookReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
