import React, { useContext } from 'react';
// SideBar Context
import { SidebarContext } from '../contexts/SidebarContext';
// Icons
import { BsCart3 } from 'react-icons/bs';

const Header = () => {
  const { isOpened, setIsOpened } = useContext(SidebarContext)
  return <header className='bg-orange-200'>
    <div>Header</div>
    <div onClick={() => setIsOpened(!isOpened)} className='cursor-pointer flex relative '>
      <BsCart3 className='text-2xl' />
    </div>
  </header>;
};

export default Header;
