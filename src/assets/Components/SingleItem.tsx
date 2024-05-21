import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import ItemPage from './ItemPage';
import { useSelector } from 'react-redux';
//import { setActive } from '../../features/itemsSlice.ts';
import placeholder from '../../../placeholder.jpeg';
import { RootState} from '../../store';
import { Item } from '../../features/itemTypes';

interface SingleItemProps {
  toggleSetActive: (index: number) => void;
  item: Item;
}

const SingleItem: React.FC<SingleItemProps> = ({ toggleSetActive, item }) => {

  const { id, index, title, description } = item;

  const { activeId } = useSelector((store: RootState) => store.items);

  const isActive:boolean = activeId == index;

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
