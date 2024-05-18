import React from 'react';
import SingleItem from './SingleItem';
import { useSelector } from 'react-redux';


const Items = () => {
  const { items, total, amount } = useSelector((state) => state.items);


  return (
    <section>
      <div className='title'>
        <h2>Items</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        { items ?
         items?.map((item) => {       
          return <SingleItem key={item.index} {...item} />;
        })
        :
        <div>not found</div>
        }
      </div>
    </section>
  );
};

export default Items;
