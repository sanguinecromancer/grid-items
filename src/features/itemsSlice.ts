import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Item, ItemsResponse, FetchError } from './itemTypes';


export const url = 'http://54.73.73.228:4369/api/images';

export interface ItemsState {
  items: Item[];
  amount: number;
  total: number;
  loading: boolean;
  errors: string | null;
  activeId: number | null;
}

const initialState: ItemsState = {
  items: [],
  amount: 5,
  total: 0,
  loading: true,
  errors: null,
  activeId: null
};

export let cache: Item[] = [];
export const fetchItems = createAsyncThunk<Item[], void, { rejectValue: FetchError }>(
  'items/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get<ItemsResponse>(url);
     
      const itemsArray = Object.values(resp.data);

      const processedData = itemsArray
        .slice() // Create a shallow copy of the array to avoid mutating the original array
        .sort((a, b) => a.index - b.index) // Sort the array by the index property
        .map((item) => {
        return {
          id: nanoid(), // Add a unique id using nanoid
          ...item
        };
      });
      // Check if the response data is valid
      if (itemsArray?.length > 1) {
        // Update the cache with the valid response data
        cache = JSON.parse(JSON.stringify(processedData));
        return cache;
      } else {
        // If the response data is not valid, return the cached data
        return cache.length > 1 ? cache : thunkAPI.rejectWithValue({ message: 'No valid data available' });
      }
    } catch (error) {
      // In case of an error, return the cached data if available
      return cache.length > 1 ? cache : thunkAPI.rejectWithValue({ message: 'No valid data available' });
    }
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<number>) => {
      //const item = state.items.find((i) => i.id === payload);
      console.log(typeof action.payload);
      state.activeId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        // console.log(action);
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action: PayloadAction<FetchError | undefined>) => {
        console.log(action);
        state.loading = false;
        state.errors = action.payload?.message || 'Failed to fetch items';
      });
  },
});

export const { setActive } = itemsSlice.actions;

export default itemsSlice.reducer;