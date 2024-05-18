import { createSlice } from '@reduxjs/toolkit';
import { itemList } from '../App';

const initialState = {
  items: itemList,
  amount: 5,
  total: 0,
  isLoading: true,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
});

console.log(itemsSlice);

export default itemsSlice.reducer;