import React, { useState } from 'react';
import { data, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'; // Example solid icons
import {AuthContext} from '../context/AuthContext.jsx'
import { useContext } from 'react'
import { serviceLogout } from '../services/services.jsx';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const {isLoggedIn, user, handleLogout} = useContext(AuthContext);


    return (
        <nav className="bg-purple-900 shadow-[0_0_10px_black] fixed w-full z-10 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="hover:scale-105 hover:bg-purple-700 text-white px-3 py-2 rounded transition">Home</Link>
                        <Link to="/projects" className="text-white hover:scale-105 hover:bg-purple-700 px-3 py-2 rounded transition">Projects</Link>
                        <Link to="/contactme" className="text-white hover:scale-105 hover:bg-purple-700  px-3 py-2 rounded transition">Contact Me</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                        {(!menuOpen) ?
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 6h16M4 12h16M4 18h16" />
                        </svg>
                        :
                        <FontAwesomeIcon className='text-2xl' icon={faXmark}/>
                        }
                        </button>
                    </div>
                    <div className="flex relative  m-0 p-0">
                        {
                            (!isLoggedIn)
                            ?
                            <div className='flex items-center'>
                                <Link to="/login" className="text-white p-[10px] text-xl rounded-md hover:scale-105 hover:bg-purple-700">Login</Link><p className='text-blue-400 text-5xl relative font-thin top-[-7px]'>|</p>
                        <Link to="/signup" className="text-white text-xl hover:scale-105 hover:bg-purple-700 p-[10px] rounded-md">Signup</Link>
                            </div>
                            :
                            <div className='flex items-center gap-2'>
                                <div className='text-center'>
                                <p className='text-white text-2xl'>{user.firstName} {user.lastName}</p>
                                <p className='text-xs text-white'>{user.email}</p>
                                </div>
                                <button className="text-white cursor-pointer p-[8px] text-xl rounded-xl hover:scale-105 bg-red-500 hover:bg-red-700" type='submit' onClick={handleLogout}>logout</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {(menuOpen) ? (
                <div className="md:hidden absolute bg-black flex flex-col px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="text-white hover:scale-105 hover:text-blue-400 px-3 py-2 rounded transition" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/projects" className="block text-white hover:scale-105 hover:text-blue-400 px-3 py-2 rounded transition" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="/contactme" className="block text-white hover:scale-105 hover:text-blue-400 px-3 py-2 rounded transition" onClick={() => setMenuOpen(false)}>Contact Me</Link>
                </div>
            )
        :
        ''
        }
        </nav>
    );
}