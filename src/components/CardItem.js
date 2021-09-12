import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(title,imageUrl,body) {
  return (
    <div className='CardItem-container'>
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
    </div>
  );
}

export default CardItem;