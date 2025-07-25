'use client';

import React, { useEffect, useState } from 'react';

const heroData = {
  title: 'Discover the Best Cafes Near You',
  subtitle: 'Find, review, and book your next coffee adventure.',
  button: {
    text: 'Book Now',
    href: '/booking',
  },
  image: '/best-coffee.jpg',
};

const CAFE_URL = 'https://raw.githubusercontent.com/ganga-300/Data/main/cafe.json';

const HeroSection = () => {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(CAFE_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setCafes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredCafes = cafes.filter(
    (cafe) =>
      cafe.name.toLowerCase().includes(search.toLowerCase()) ||
      cafe.address.toLowerCase().includes(search.toLowerCase()) ||
      cafe.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="relative w-full h-[32rem] flex items-center justify-center overflow-hidden">
        <img
          src={heroData.image}
          alt="Best Coffee"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-yellow-900/30 to-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-up">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow animate-fade-in-up delay-100">
            {heroData.subtitle}
          </p>
          <a
            href={heroData.button.href}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-colors duration-200 animate-fade-in-up delay-200"
          >
            {heroData.button.text}
          </a>
        </div>
      </section>
      {/* Discover Cafes Near Me Section */}
      <section className="py-16 bg-gradient-to-b from-white to-yellow-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-yellow-700 drop-shadow">Discover Cafes Near Me</h2>
          <div className="flex justify-center mb-8">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, address, or description..."
              className="w-full md:w-1/2 px-4 py-3 border border-yellow-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
            />
          </div>
          {loading ? (
            <div className="text-center py-8">Loading cafes...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">Error: {error}</div>
          ) : filteredCafes.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No cafes found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredCafes.map((cafe, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border border-yellow-100 group flex flex-col">
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-yellow-700">{cafe.name}</h3>
                      <p className="text-gray-600 mb-2">{cafe.address}</p>
                      <p className="text-gray-700 mb-4">{cafe.description}</p>
                    </div>
                    <button
                      onClick={() => window.open(cafe.maps, '_blank')}
                      className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-full shadow-lg transition-colors duration-200"
                    >
                      View on Google Maps
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection; 