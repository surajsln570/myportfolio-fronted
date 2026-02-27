import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext.jsx'
import { useContext } from 'react'

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isLoggedIn, handleLogout } = useContext(AuthContext);

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-[0_0_10px_black] fixed w-full z-30 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[80px]">
                    <div className=''>
                        <div className='text-2xl font-bold'>Suraj Singh</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="hover:scale-102 hover:bg-purple-700 hover:text-white text-mute px-3 py-3 rounded transition-all duration-300">Home</Link>
                            <a className="text-mute hover:scale-102 hover:text-white hover:bg-purple-700 px-3 py-3 rounded transition duration-300" href='/#about'>About</a>
                            <a className="text-mute hover:scale-102 hover:text-white hover:bg-purple-700 px-3 py-3 rounded transition duration-300" href='/#skills'>Skillls</a>
                            <a className="text-mute hover:scale-102 hover:text-white hover:bg-purple-700 px-3 py-3 rounded transition duration-300" href='/#projects'>Projects</a>
                            <a className="text-mute hover:scale-102 hover:text-white hover:bg-purple-700 px-3 py-3 rounded transition duration-300" href='/#contact'>Contact</a>
                        </div>
                        <div className="flex relative  m-0 p-0">
                            {
                                (!isLoggedIn)
                                    ?
                                    ''
                                    :
                                    <button className="text-white hidden md:block cursor-pointer p-[8px] text-xl rounded-xl hover:scale-105 bg-red-500 hover:bg-red-700" type='submit' onClick={handleLogout}>logout</button>
                            }
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-black focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {(!menuOpen) ?
                                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 6h16M4 12h16M4 18h16" />
                                </svg>
                                :
                                <FontAwesomeIcon className='text-2xl' icon={faXmark} />
                            }
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {(menuOpen) ? (
                <div className="md:hidden bg-black/50 backdrop-blur-3xl flex flex-col px-2 w-full space-y-1">
                    <Link to="/" className="text-white hover:scale-101 hover:text-blue-400 px-3 py-2 rounded transition-all duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
                    <a className="block text-white hover:scale-101 hover:text-blue-400 px-3 py-2 rounded transition-all duration-300" href='/#about'>About</a>
                    <a className="block text-white hover:scale-101 hover:text-blue-400 px-3 py-2 rounded transition-all duration-300" href='/#skills'>Skills</a>
                    <a className="block text-white hover:scale-101 hover:text-blue-400 px-3 py-2 rounded transition-all duration-300" href='/#projects'>Projects</a>
                    <a className="block text-white hover:scale-101 hover:text-blue-400 px-3 py-2 rounded transition-all duration-300" href='/#contact'>Contact</a>
                    {isLoggedIn && <button className="text-white cursor-pointer p-[8px] text-xl rounded-xl hover:scale-101 transition-all duration-300 bg-red-500 hover:bg-red-700" type='submit' onClick={handleLogout}>logout</button>}
                </div>
            )
                :
                ''
            }
        </nav>
    );
}