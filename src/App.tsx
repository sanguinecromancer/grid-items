

import { useEffect } from 'react';
import Loading from './Loading';
import Items from './assets/Components/Items';
import { fetchItems } from './features/itemsSlice.ts';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from './store.ts';
import { useAppDispatch, useAppSelector } from './hooks.ts';

function App() {

  const { loading } = useAppSelector((state) => state.items);
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

  return (
    <main>
      <Items/>
    </main>
  );
}

export default App;
