

import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Items from './assets/Components/Items';


const url = 'http://54.73.73.228:4369/api/images';

let cache = [];

function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const objectItems = await response.json();
      const itemsArray = Object.values(objectItems);

      setLoading(false);
      if (itemsArray?.length > 0) {
        setItems(itemsArray);
        cache = JSON.parse(JSON.stringify(itemsArray));  // Cache the data in the array
    
      }
    } catch (error) {
      console.error('Fetching data failed:', error);
      if (cache.length > 0) {
        setItems(cache);  // Use cached data if fetch fails
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cache?.length > 0) {
      setItems(cache);  // Use cached data if available
      setLoading(false);
    } else {
      fetchItems();
    }
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!items || items.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No items left</h2>
          <button className='btn' onClick={fetchItems}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Items items={items} />
    </main>
  );
}

export default App;

