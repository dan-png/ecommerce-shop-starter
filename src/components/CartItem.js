import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, image, price, amount } = item
  return <div className='flex'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* Image */}
      <Link to={`/product/${id}`}>
        <img className='max-w-[90px]' src={image} alt='' />
      </Link>
      <div className='w-full flex flex-col'>
        {/* title & remove icon */}
        <div className='flex justify-between mb-2'>
          {/* title */}
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
          {/* remove icon */}
          <div className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
          </div>
        </div>
        <div className='bg-orange-100 flex gap-x-2 h-[36px] text-sm'>
          {/* Qty */}
          <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
            {/* minus icon */}
            <div className='flex-1 flex justify-center items-center cursor-pointer'>
              <IoMdRemove />
            </div>
            {/* amount */}
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            {/* plus icon */}
            <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdAdd />
            </div>
          </div>
          {/* Item price */}
          <div>item price</div>
          {/* Final price */}
          <div>final price</div>
        </div>
      </div>

    </div>
  </div>;
};

export default CartItem;
