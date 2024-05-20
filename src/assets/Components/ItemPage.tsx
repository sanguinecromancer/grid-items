import React, { useState } from 'react';
import { useSelector } from 'react-redux';



const ItemPage = ({ index, image,  title, description }) => {
  //const [readMore, setReadMore] = useState(false);
    const { items } = useSelector((state) => state.items);
   
  return (
    <div>
      <img src={image} alt={title} className='img' />
        <p>{title}</p>
     
    </div>
  );
};

export default ItemPage;