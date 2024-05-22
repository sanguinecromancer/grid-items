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
        .slice() // shallow copy
        .sort((a, b) => a.index - b.index)
        .map((item) => {
        return {
          id: nanoid(),
          ...item
        };
      });

      if (itemsArray?.length > 1) {
        cache = JSON.parse(JSON.stringify(processedData)); // deep copy goes to the cache
        return cache;
      } else {
        return cache.length > 1 ? cache : thunkAPI.rejectWithValue({ message: 'No valid data available' });
      }
    } catch (error) {
      return cache.length > 1 ? cache : thunkAPI.rejectWithValue({ message: 'No valid data available' });
    }
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action: PayloadAction<FetchError | undefined>) => {
        state.loading = false;
        state.errors = action.payload?.message || 'Failed to fetch items';
      });
  },
});

export const { setActive } = itemsSlice.actions;

export default itemsSlice.reducer;