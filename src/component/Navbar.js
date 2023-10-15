import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from './Search';

 export const Navbar = ({darkThem,setdarkThem}) => {
  return (
    <div className="p-8 pb-0 flex flex-wrap sm:justify-between justify-center   border-b dark:border-gray-700 border-gray-300">
       <div className=' flex justify-between items-center space-x-5 w-screen'>
          <Link to="/">
             <p className=' text-2xl bg-blue-500 text-white py-1 px-2 rounded  dark:bg-gray-500 dark:text-gray-900'>
              Google
             </p>
          </Link>
          <button type='button' onClick={()=>setdarkThem(!darkThem)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg '>
              {darkThem ? 'light':'dark'}
          </button>
       </div> 
       <Search />
    </div> 
  );
}
