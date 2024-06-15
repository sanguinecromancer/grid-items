
For running the app:

npm install

npm run dev

For testing:

npm run test


------------------------------------------------------------------------------------------------------------------------

Libraries:
React and Redux toolkit - Reducers can be found in itemsSlice.ts.
State updates in reducers are automatically immutable thanks to 
the integrated Immer library inside Redux toolkit. No need to worry about state updates.

Caching:
Saving items in a cache array and assign a nanoId library for unique ids.

Performance:
For performance purposes, I used React.lazy, Suspense, memo and reselect features of React.

Testing:
Simple test which mimics the fetch and caching of the items.

CSS: 
Grid style




