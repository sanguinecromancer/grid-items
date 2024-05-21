import React, { useState } from 'react';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../features/itemsSlice';

const Items = () => {

  const dispatch = useDispatch();
  const { items, activeId } = useSelector((store) => store.items);

  const toggleSetActive = (index) => {
    const newActiveId = index === activeId ? null : index;
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
         items?.map((item) => {       
          return <SingleItem key={item.id} toggleSetActive={toggleSetActive} item={item} isActive={item.index === activeId}/>;
        })
        :
          <div>not found</div>
        }
      </div>
    </section>
  );
};

export default Items;
