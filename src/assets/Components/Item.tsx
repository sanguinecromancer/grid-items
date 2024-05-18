import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemPage from './ItemPage';


const Item = ({ index, image,  title, description }) => {
  //const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={title} className='img' />
      <Link to={`/itempage/${index}`}> 
    link
      </Link>
     
    </article>
  );
};

export default Item;
