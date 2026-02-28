import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../context/AuthContext.jsx'

export default function Navigation() {

  const [menuOpen, setMenuOpen] = useState(false)
  const { isLoggedIn, handleLogout } = useContext(AuthContext)

  const navItem =
    "relative text-gray-700 hover:text-purple-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"

  return (
    <nav className="fixed w-full top-0 left-0 z-40 bg-white/70 backdrop-blur-lg border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[75px]">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition">
            Suraj Singh
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <Link to="/" className={navItem}>Home</Link>
            <Link to="/blog" className={navItem}>Blog</Link>
            <a href="/#about" className={navItem}>About</a>
            <a href="/#skills" className={navItem}>Skills</a>
            <a href="/#projects" className={navItem}>Projects</a>
            <a href="/#contact" className={navItem}>Contact</a>

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-300 shadow-md">
                Logout
              </button>
            )}

          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 text-2xl"
            >
              {menuOpen
                ? <FontAwesomeIcon icon={faXmark} />
                : (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl 
                        border-t border-gray-200 
                        flex flex-col px-6 py-4 space-y-4 shadow-lg">

          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-600 transition">Home</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-600 transition">Blog</Link>
          <a href="/#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-600 transition">About</a>
          <a href="/#skills" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-600 transition">Skills</a>
          <a href="/#projects" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-600 transition">Projects</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-purple-600 transition">Contact</a>

          {isLoggedIn && (
            <button
              onClick={() => {
                handleLogout()
                setMenuOpen(false)
              }}
              className="mt-2 px-4 py-2 rounded-lg 
                         bg-red-500 text-white 
                         hover:bg-red-600 transition">
              Logout
            </button>
          )}

        </div>
      )}

    </nav>
  )
}