import React, { useState } from 'react';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';


const Items = () => {

  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.items);

  const [activeId, setActiveId] = useState(null);

  const toggleSetActive = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
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
          return <SingleItem key={item.index} activeId={activeId} {...item} toggleSetActive={toggleSetActive} />;
        })
        :
        <div>not found</div>
        }
      </div>
    </section>
  );
};

export default Items;
