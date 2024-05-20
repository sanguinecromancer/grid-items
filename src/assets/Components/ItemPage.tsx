import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import placeholder from '../placeholder.jpeg';

const ItemPage = () => {
  const { id } = useParams();

  // Select the item from the Redux store based on the ID from the URL

  const item = useSelector((store) => store.items?.items.find((item) => item.id === id));

  // Show a loading message or a placeholder if the item is not found
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={item.image || placeholder} alt={item.title} className='img' />
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
    </div>
  );
};

export default ItemPage;
