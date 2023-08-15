import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, image, price, amount } = item
  return <div className='flex'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* Image */}
      <Link to={`/product/${id}`}>
        <img className='max-w-[90px]' src={image} alt='' />
      </Link>
      <div>
        {/* title & remove icon */}
        <div>
          <Link to={`/product/${id}`}>{title}</Link>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
