import { useContext } from 'react';
// Link
import { Link } from 'react-router-dom';
// Icons
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
// Components
import CartItem from '../components/CartItem'
// Sidebar Context
import { SidebarContext } from '../contexts/SidebarContext';
// Cart Context
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {
  // using sidebar context
  const { isOpened, handleClose } = useContext(SidebarContext)
  // using cart context
  const { cart } = useContext(CartContext)

  return <div className={`${isOpened ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-8 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Cart (0)</div>
      {/* Icon */}
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div>{cart.map((item) => {
      return <CartItem item={item} key={item.id} />
    })}</div>
  </div>;
};

export default Sidebar;
