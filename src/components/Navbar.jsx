import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='fixed top-0 w-full h-20 bg-black/80 flex items-center justify-between px-8 z-50 backdrop-blur-md border-b border-white/10'>
      <div className="font-pacifico text-2xl text-golden">
        <Link to="/" className="no-underline text-inherit">Bean Scene</Link>
      </div>

      <ul className="list-none flex gap-8">
        <li><Link to='/' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Home</Link></li>  
        <li><Link to='/About' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">About Us</Link></li>  
        <li><Link to='/Contact' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Contact</Link></li> 
        <li><Link to='/Blogs' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Blogs</Link></li> 
        <li><Link to='/Book-a-table' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Book a table</Link></li> 
      </ul>

      <input
        type="text"
        className="relative w-56 h-9 bg-white rounded-full px-4 text-sm border-none outline-none transition-shadow duration-300 shadow-md placeholder-gray-400"
        placeholder="Search cafes..." 
        id="search-bar"
      />

      <div className="flex gap-3">
        <button className="px-5 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 border border-white bg-transparent text-white hover:bg-white/10">Sign In</button>
        <button className="px-5 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 border-none bg-golden text-black font-medium shadow-md hover:bg-yellow-400">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;