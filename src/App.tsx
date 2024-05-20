

import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Items from './assets/Components/Items';
import { getItems } from './features/itemsSlice';
import { useDispatch, useSelector } from 'react-redux';

export let cache = [];

function App() {

  const { items, loading } = useSelector((store) => store.items);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Items/>
    </main>
  );
}

export default App;
