import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: [
      { id: 1, name: 'Artem', number: '0934530665' },
      { id: 2, name: 'Artem', number: '0934530665' },
    ],
  },
  reducers: {
    addPhone: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    deletePhone: {
      reducer(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
};

export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const { addPhone, deletePhone } = phonebookSlice.actions;
