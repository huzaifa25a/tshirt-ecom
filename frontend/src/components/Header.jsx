import React, { useState } from 'react'
import {X, Menu} from 'lucide-react'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='fixed md:static h-20 top-0 w-full bg-white flex flex-row justify-between p-6 border-b-2 border-gray-300'>
          <span className='text-[18px] font-bold'>Funky Store</span>
          <div className='hidden md:flex gap-12'>
            <span className='cursor-pointer'>Home</span>
            <span className='cursor-pointer'>Collection</span>
            <span className='cursor-pointer'>About</span>
            <span className='cursor-pointer'>Contact</span>
          </div>
          <div className='hidden md:flex gap-6'>
            <span className='cursor-pointer'>Login</span>
            <span className='cursor-pointer'>Signup</span>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
            {menuOpen ?
              <div className='fixed top-22 right-2 p-3 w-70 bg-white border-gray-200 border-2 flex flex-col gap-5'>
                <span className='w-full text-center cursor-pointer border-b-1 border-gray-200 pb-2'>Home</span>
                <span className='w-full text-center cursor-pointer border-b-1 border-gray-200 pb-2'>Collection</span>
                <span className='w-full text-center cursor-pointer border-b-1 border-gray-200 pb-2'>About</span>
                <span className='w-full text-center cursor-pointer border-b-1 border-gray-200 pb-2'>Contact</span>
                <span className='w-full text-center cursor-pointer border-b-1 border-gray-200 pb-2'>Login</span>
                <span className='w-full text-center cursor-pointer border-b-1 border-gray-200 pb-2'>Signup</span>
              </div>
              :
              null
            }
          </div>
      </div>
    </>
  )
}

export default Header