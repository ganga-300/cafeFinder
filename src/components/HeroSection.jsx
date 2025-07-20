import React from 'react';

function HeroSection() {
  const handleOrderClick = () => {
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
      searchBar.scrollIntoView({ behavior: 'smooth' });
      searchBar.focus();
    }
  };

  return (
    <section className="w-full h-screen bg-hero-pattern bg-no-repeat bg-center bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
      <div className="absolute top-1/3 left-1/10 text-white max-w-2xl z-20 px-4">
        <h4 className="text-xl mb-2">We've got your morning covered with</h4>
        <h1 className="text-6xl md:text-8xl font-great-vibes">Coffee</h1>
        <p className="text-base md:text-lg mb-8">
          It is best to start your day with a cup of coffee. Discover the best flavours
          coffee you will ever have. We provide the best for our customers.
        </p>
        <button 
          className="px-8 py-3 bg-golden border-none rounded-full text-base font-bold cursor-pointer shadow-lg hover:bg-golden-dark hover:scale-105 transition-all duration-300" 
          onClick={handleOrderClick}
        >
          Order Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;