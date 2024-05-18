import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
});

console.log(itemsSlice);

export default itemsSlice.reducer;