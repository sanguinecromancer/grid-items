import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemPage from './ItemPage';
import { useDispatch } from 'react-redux';
import { setActive } from '../../features/itemsSlice';



const SingleItem = ({ id, index, activeId, image,  title, description, toggleSetActive }) => {

  const isActive = id === activeId;
  //const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();
  return (
    <article className='single-tour'>
      <img src={image} alt={title} className='img' />
      <Link to={`/itempage/${index}`}> 
          link
      </Link>
      {/* <button className="btn" onClick={() => dispatch(setActive(index))}> Click to go </button> */}

      <button className="task-button" onClick={() => toggleSetActive(id)} aria-expanded={isActive ? "true" : "false"}>
          { isActive ? 
            <div><p className="hide-show-text">Hide</p></div>
            :
            <div><p className="hide-show-text">Show</p> </div>
          }
        </button>
     
    </article>
  );
};

export default SingleItem;
