
import { useEffect } from 'react';
import Loading from './Loading';
import Items from './assets/Components/Items';
import { fetchItems } from './features/itemsSlice.ts';
import { useAppDispatch, useAppSelector } from './hooks.ts';

function App() {

  const { loading, items } = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
          <h2>No items available</h2>
          <button className='btn' onClick={() => fetchItems()}>
            refresh
          </button>
        </div>
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
