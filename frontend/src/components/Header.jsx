import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between p-6 border-b-2 border-gray-300'>
        <span>Funky Store</span>
        <div className='flex gap-12'>
            <span className='cursor-pointer'>Home</span>
            <span className='cursor-pointer'>Collection</span>
            <span className='cursor-pointer'>About</span>
            <span className='cursor-pointer'>Contact</span>
        </div>
        <div className='flex gap-6'>
            <span className='cursor-pointer'>Login</span>
            <span className='cursor-pointer'>Signup</span>
        </div>
    </div>
  )
}

export default Header