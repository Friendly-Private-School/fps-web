import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';


const Navbar = ({isAuth, setIsAuth}) => {
    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname="/login"
        })
    }

  return (
    <nav className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#ffffff] font-bold '>
        <div className='w-auto'>
            <button className='logo-title text-4xl font-bold text-[#33ff00] glass-effect px-4 py-2'>Friendly</button>
        </div>
        
        <ul className='hidden md:flex uppercase'>
            <li className='p-4 cursor-pointer hover:text-[#fdfdfdc3] transition ease-in-out duration-1000'><NavLink to='/'>Home</NavLink></li>
            <li className='p-4 cursor-pointer hover:text-[#fdfdfdc3] transition ease-in-out duration-1000'><NavLink to='/blog'>Blog</NavLink></li>
            <li className='p-4 cursor-pointer hover:text-[#fdfdfdc3] transition ease-in-out duration-1000'><NavLink to='/gallery'>Gallery</NavLink></li>
            <li className='p-4 cursor-pointer hover:text-[#fdfdfdc3] transition ease-in-out duration-1000'><NavLink to='/about'>About</NavLink></li>
            <li className='p-4 cursor-pointer hover:text-[#fdfdfdc3] transition ease-in-out duration-1000'><NavLink to='/contact'>Contact</NavLink></li>
            {!isAuth ? 
                <li className='p-4 cursor-pointer transition ease-in-out duration-500 bg-white hover:bg-gray-200 rounded text-[#42b426]'><Link to='/login'>Login</Link></li>
                : <li className=' p-4 cursor-pointer transition ease-in-out duration-500 bg-white hover:bg-gray-200 rounded text-[#42b426] uppercase'>
                    <button onClick={signUserOut} className='uppercase'>Log Out</button>
                    </li>}
        </ul>
        <div onClick={handleNav} class='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20} /> :  <AiOutlineClose size={20} />}
            
        </div>
        <div className={!nav ? 'fixed md:hidden left-[-100%] ease-in-out duration-500' : ' fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#07230e] ease-in-out duration-500 z-50'}>
            <div className='w-full'>
                <button className='logo-title text-4xl font-bold text-[#33ff00] glass-effect px-4 py-2 ml-2 mt-2'>Friendly</button>
            </div>
            <ul className='p-4 uppercase text-white'>
                <li className='p-4 border-b border-gray-400 cursor-pointer'><NavLink to='/'>Home</NavLink></li>
                <li className='p-4 border-b border-gray-400 cursor-pointer'><NavLink to='/blog'>Blog</NavLink></li>
                <li className='p-4 border-b border-gray-400 cursor-pointer'><NavLink to='/gallery'>Gallery</NavLink></li>
                <li className='p-4 border-b border-gray-400 cursor-pointer'><NavLink to='about'>About</NavLink></li>
                <li className='p-4 border-b border-gray-400 cursor-pointer'><NavLink to='/contact'>Contact</NavLink></li>
                {!isAuth ?  <li className='p-4 cursor-pointer uppercase bg-white text-[#33ff00] rounded mt-2'><Link to='/login'>Login</Link></li> : <li className='p-4 cursor-pointer uppercase bg-white text-[#33ff00] rounded mt-2'><button className='uppercase '>Log Out</button></li>}
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar