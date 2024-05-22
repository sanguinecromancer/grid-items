import React, { useState, memo } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import placeholder from '../placeholder.jpg';
import { RootState} from '../../store';
import { Item } from '../../features/itemTypes';

interface SingleItemProps {
  toggleSetActive: (index: number) => void;
  item: Item;
}

const SingleItem: React.FC<SingleItemProps> = memo(({ toggleSetActive, item }) => {

  const { id, index, title, description, image } = item;
  const { activeId } = useSelector((store: RootState) => store.items);
  const isActive:boolean = activeId == index;
  const [imgError, setImgError] = useState(false);

  return (
    <article className={isActive ? 'single-item-active' : 'single-item'}>
      <Link to={`/itempage/${id}`} onClick={() => toggleSetActive(index)}> 
        <img
          src={imgError ? placeholder : image}
          alt={item.title}
          className='img'
          onError={() => setImgError(true)}
        />
      </Link>
        <div className='item-info'>
          <h5>{title}</h5>
          <p>{description || 'No description'}</p>
        </div>
    </article>
  );
});

export default SingleItem;
