import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://54.73.73.228:4369/api/images';

const initialState = {
  items: [],
  amount: 5,
  total: 0,
  loading: true,
  errors: null
};

let cache = [];
export const getItems = createAsyncThunk(
  'fetchAll',
  async (cache, thunkAPI) => {
    try {
      const resp = await axios(url);
     
      const itemsArray = Object.values(resp.data);
   
      // Check if the response data is valid
      if (itemsArray?.length > 1) {
        // Update the cache with the valid response data
        cache = JSON.parse(JSON.stringify(itemsArray)); 
        return cache;
      } else {

        // If the response data is not valid, return the cached data
        console.log(cache);
        return cache.length > 1 ? cache : thunkAPI.rejectWithValue('No valid data available');
      }
    } catch (error) {
      // In case of an error, return the cached data if available
      return cache.length > 1 ? cache : thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setActive: (state, { payload }) => {
      const item = state.items.find((i) => i.index === payload.index);
      item.active = !item.active;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        // console.log(action);
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getItems.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      });
  },
});

export const { setActive } = itemsSlice.actions;

export default itemsSlice.reducer;