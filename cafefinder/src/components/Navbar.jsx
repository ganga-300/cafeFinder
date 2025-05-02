import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
      <div className="logo">
        <Link to="/" className="logo-link">Bean Scene</Link>
      </div>

        <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>  
        <li><Link to="#">Menu</Link></li>
        <li><Link to='/About'>About Us</Link></li>  
        <li><Link to='/Contact'>Contact</Link></li>  
        </ul>

        <input
        type="text"
        className="search-bar"
        placeholder="Search cafes..."/>

        
        <div className="nav-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
