import React from 'react'
import { NavLink } from 'react-router-dom'
const links=[
{url:'/search', text:'All'},
{url:'/search', text:'news'}
]
export const Link = () => {
  return (
    <div className='flex sm:justify-around items-center mt-4 m-3'>
      {links.map(({url,text})=>(
        <NavLink to={url} 
        className='m-4'
        activeClassName="text-blue-700 border-b-2 dark:text-blue-300">
            {text}
            </NavLink>
      ))}
    </div>
  )
}
