import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Booking', href: '/booking' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/capstonemain.png" alt="CafeFinder Logo" className="h-8 w-8 rounded-full shadow" />
          <span className="text-2xl font-extrabold tracking-tight">CafeFinder</span>
        </div>
        <ul className="flex space-x-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-white hover:bg-gray-900 px-3 py-1 rounded"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 