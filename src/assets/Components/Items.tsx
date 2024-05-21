import React from 'react';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../features/itemsSlice.ts';
import { Item } from '../../features/itemTypes';
import { RootState, AppDispatch } from '../../store';

const Items: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const { items, activeId } = useSelector((store: RootState) => store.items);

  const toggleSetActive = (index: number) => {
    const newActiveId = index == activeId ? -1: index;
    dispatch(setActive(newActiveId));
  }

  return (
    <section>
      <div className='title'>
        <h2>Items</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
      { items ?
          items.map((item: Item) => {       
          return <SingleItem key={item.id} toggleSetActive={toggleSetActive} item={item}/>;
        })
        :
          <div>not found</div>
        }
      </div>
    </section>
  );
};

export default Items;
