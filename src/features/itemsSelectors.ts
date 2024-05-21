import { RootState } from './../store';
import { createSelector } from 'reselect';
import { ItemsState } from './itemsSlice';

const selectItemsState = (state: RootState): ItemsState => state.items;

export const selectItems = createSelector(
  [selectItemsState],
  (itemsState) => itemsState.items
);

export const selectActiveId = createSelector(
  [selectItemsState],
  (itemsState) => itemsState.activeId
);
