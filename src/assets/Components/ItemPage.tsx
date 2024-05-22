import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import placeholder from '../../../placeholder.jpeg';
import { RootState } from '../../store';
import { Item } from '../../features/itemTypes';

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const item: Item | undefined = useSelector((store: RootState) => 
    store?.items.items.find((item) => item.id === id)
  );

  const [imgError, setImgError] = useState(false);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
