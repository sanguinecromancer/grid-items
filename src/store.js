import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/itemsSlice';
import { cache } from './App';


export const store = configureStore({
  reducer: {
    items: itemsReducer,
    // modal: modalReducer,
  },
});
