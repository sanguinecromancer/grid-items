import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemPage from './ItemPage';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../features/itemsSlice';
import placeholder from '../placeholder.jpeg';


const SingleItem = ({ toggleSetActive, item, isActive }) => {

  const { id, index, image = placeholder,  title, description } = item;

  const { activeId } = useSelector((store) => store.items);

  const [imgError, setImgError] = useState(false);
  return (
    <article className='single-tour'>
      <Link to={`/itempage/${id}`} onClick={() => toggleSetActive(index)}> 
      <img
        src={imgError ? placeholder : item.image}
        alt={item.title}
        className='img'
        onError={() => setImgError(true)}
      />
      </Link>
        <h2>Hi</h2>
        <h2 className={isActive ? 'active' : ''}>{isActive ? 'Active' : 'Not Active'}</h2>
    </article>
  );
};

export default SingleItem;
