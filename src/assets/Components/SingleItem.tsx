import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemPage from './ItemPage';
import { useDispatch } from 'react-redux';
import { setActive } from '../../features/itemsSlice';


const SingleItem = ({ index, image,  title, description }) => {
  //const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();
  return (
    <article className='single-tour'>
      <img src={image} alt={title} className='img' />
      <Link to={`/itempage/${index}`}> 
          link
      </Link>
      <button className="btn" onClick={() => dispatch(setActive(index))}> Click to go </button>
     
    </article>
  );
};

export default SingleItem;
