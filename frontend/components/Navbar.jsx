import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="logo flex items-center">
          <span className="mr-2">🍽️</span>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
           MealMaster
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/login" className=" nav-item text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
              Log In
            </Link>
            <Link to="/signup" className="nav-item text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar