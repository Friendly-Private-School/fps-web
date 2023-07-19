import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full pt-16 pb-8 bg-[#072033]'>
      <div className='w-[95%] mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white'>

        <div className='flex flex-col gap-8 items-center border-b-2 border-gray-600 pb-5'>
          <h1 className='text-3xl'>Contact</h1>
          <ul className='flex flex-col gap-2 text-lg'>
              <li><span>Email:</span><span>example@gmail.com</span></li>
              <li><span>Phone:</span><span>+264 xx xxx xxxx</span></li>
              <li><span>Address:</span><span>Queenspark, Rundu</span></li>
          </ul>
        </div>
        <div className='flex flex-col gap-8 items-center border-b-2 border-gray-600 pb-5'>
          <h1 className='text-3xl'>Navigation</h1>
          <ul className='flex flex-col gap-2 text-lg'>
              <Link to='/'><li className='cursor-pointer'>Home</li></Link>
              <Link to='/blog'><li className='cursor-pointer'>Blog</li></Link>
              <Link to='/gallery'><li className='cursor-pointer'>Gallery</li></Link>
              <Link to='/about'><li className='cursor-pointer'>About</li></Link>
              <Link to='/contact'><li className='cursor-pointer'>Contact</li></Link>
          </ul>
        </div>
        <div className='flex items-center justify-center sm:col-span-2 md:col-span-1 pt-5'>
          <h1 className='text-5xl logo-title text-primary text-center glass-effect py-5 px-2'>Friendly Private School</h1>
        </div>

      </div>
    </div>
  )
}

export default Footer