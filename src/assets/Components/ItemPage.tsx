import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import placeholder from '../placeholder.jpeg';

const ItemPage = () => {
  const { id } = useParams();

  // Select the item from the Redux store based on the ID from the URL

  const item = useSelector((store) => store.items?.items.find((item) => item.id === id));
  const [imgError, setImgError] = useState(false);

  // Show a loading message or a placeholder if the item is not found
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <img src={item.image || placeholder} alt={item.title} className='img' /> */}
      <img
        src={imgError ? placeholder : item.image}
        alt={item.title}
        className='img'
        onError={() => setImgError(true)}
      />
      <h1>{item.title}</h1>
      <h1>{item.index}</h1>
      <h2>{item.description}</h2>
      <button className="btn"><Link to='/'>Go Home</Link></button>
    </div>
  );
};

export default ItemPage;
