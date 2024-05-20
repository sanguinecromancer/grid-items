import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemPage from './ItemPage';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../features/itemsSlice';
import placeholder from '../placeholder.jpeg';



const SingleItem = ({ toggleSetActive, item }) => {

  const { id, index, image = placeholder,  title, description } = item;

  const { activeId } = useSelector((store) => store.items);

  const isActive = id === activeId;

  return (
    <article className='single-tour'>
      <Link to={`/itempage/${id}`} onClick={() => toggleSetActive(id)}> 
        <img src={image} alt={title} className='img' />
      </Link>
    </article>
  );
};

export default SingleItem;
