import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import placeholder from '../placeholder.jpg';
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
    <section className="container">      
      <div className="group">
        <img
          src={(imgError || !item.image) ? placeholder : item.image}
          alt={item.title}
          className='img'
          onError={() => setImgError(true)}
        />
        <div className='item-info'>
          <h2>{item.title}</h2>
          {/* <h1>{item.index}</h1> */}
          <h3>{item.description}</h3>
          <Link to='/'>
          <button className="go-home-btn btn-block btn">Go Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
