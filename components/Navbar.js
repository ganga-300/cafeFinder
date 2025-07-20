'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full h-20 bg-black/80 flex items-center justify-between px-8 z-50 backdrop-blur-md border-b border-white/10'>
      <div className="font-pacifico text-2xl text-golden">
        <Link href="/" className="no-underline text-inherit">Bean Scene</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none gap-8">
        <li><Link href='/' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Home</Link></li>  
        <li><Link href='/about' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">About Us</Link></li>  
        <li><Link href='/contact' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Contact</Link></li> 
        <li><Link href='/blogs' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Blogs</Link></li> 
        <li><Link href='/booking' className="text-white no-underline text-base transition-colors duration-300 hover:text-golden">Book a table</Link></li> 
      </ul>

      {/* Search Bar */}
      <input
        type="text"
        className="hidden md:block relative w-56 h-9 bg-white rounded-full px-4 text-sm border-none outline-none transition-shadow duration-300 shadow-md placeholder-gray-400"
        placeholder="Search cafes..." 
        id="search-bar"
      />

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        <button className="px-5 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 border border-white bg-transparent text-white hover:bg-white/10">Sign In</button>
        <button className="px-5 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 border-none bg-golden text-black font-medium shadow-md hover:bg-yellow-400">Sign Up</button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md md:hidden">
          <ul className="flex flex-col p-4 space-y-4">
            <li><Link href='/' className="text-white no-underline text-base block py-2">Home</Link></li>  
            <li><Link href='/about' className="text-white no-underline text-base block py-2">About Us</Link></li>  
            <li><Link href='/contact' className="text-white no-underline text-base block py-2">Contact</Link></li> 
            <li><Link href='/blogs' className="text-white no-underline text-base block py-2">Blogs</Link></li> 
            <li><Link href='/booking' className="text-white no-underline text-base block py-2">Book a table</Link></li> 
          </ul>
        </div>
      )}
    </nav>
  )
}