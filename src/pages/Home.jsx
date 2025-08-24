import React from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'
import { useContext } from 'react'

export default function Home() {
  const {isLoggedIn, user} = useContext(AuthContext);

  return (
    <div className='flex flex-col bg-gray-100'>
      <Navigation />
       {
       (isLoggedIn)
       ?
        <Link to='/add-project' className=" flex absolute right-[5%] items-center md:mt-[-7%] mt-[-9%]">
             <svg className="h-9 w-9 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
             </svg>
             <span className='md:text-4xl text-2xl font-bold'>Add Project</span>
        </Link>
        : 
        ''
        }
      <div className='mt-[25%] md:mt-[15%] ' >
      </div>
    </div>
  )
}
