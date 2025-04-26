import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">Bean Scene</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h4>We've got your morning covered with</h4>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best flavours
            coffee you will ever have. We provide the best for our customers.
          </p>
          <button className="order-now-button">Order Now</button>
        </div>
      </section>
    </>
  );
}

export default Navbar;
