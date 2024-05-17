import React, { useState } from 'react';

const Item = ({ id, image,  title }) => {
  //const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={title} className='img' />
   
     
    </article>
  );
};

export default Item;
