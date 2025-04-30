import React from 'react';
import './herosection.css';

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
