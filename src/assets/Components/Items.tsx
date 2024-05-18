import React from 'react';
import Item from './Item';
const Items = ({ items }) => {

  return (
    <section>
      <div className='title'>
        <h2>Items</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        { items ?
         items?.map((item) => {       
          return <Item key={item.index} {...item} />;
        })
        :
        <div>not found</div>
        }
      </div>
    </section>
  );
};

export default Items;
