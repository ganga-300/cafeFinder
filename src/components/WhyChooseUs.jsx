import React from 'react';
import { FaCoffee } from 'react-icons/fa';
import { FaTags, FaGift, FaMoneyBillWave, FaShoppingBag, FaStar } from "react-icons/fa";
import {  FaUtensils} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="py-16 px-10 bg-cream text-center">
      <h2 className="text-4xl font-bold text-coffee-brown mb-3">Why Choose Us?</h2>
      <p className="text-lg text-gray-500 mb-10">
        We're not just about coffee — we're about bringing you the best experience every day!
      </p>

      <div className="flex justify-center gap-8 flex-wrap mb-10">
        <div className="bg-yellow-50 py-8 px-5 rounded-2xl w-64 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
        <FaCoffee size={50} color="black" />
          <h3 className="text-xl text-coffee-brown mb-3 mt-4">Best Coffee</h3>
          <p className="text-sm text-gray-500">Only the finest beans, roasted to perfection for you.</p>
        </div>
        <div className="bg-yellow-50 py-8 px-5 rounded-2xl w-64 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
        <FaGift size={50}  color='black'/>  
          <h3 className="text-xl text-coffee-brown mb-3 mt-4">Exciting Offers</h3>
          <p className="text-sm text-gray-500">Unbeatable deals and exclusive combos daily!</p>
        </div>
        <div className="bg-yellow-50 py-8 px-5 rounded-2xl w-64 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <FaUtensils size={50} color='black'/>
          <h3 className="text-xl text-coffee-brown mb-3 mt-4">Explore Menus</h3>
          <p className="text-sm text-gray-500">Diverse menus curated for every coffee lover's taste.</p>
        </div>
      </div>

      <p className="text-lg text-coffee-brown mb-5">
        Your perfect cup of coffee is just a click away. Dive into the rich world of flavors!
      </p>

      <button className="px-8 py-3 bg-golden border-none rounded-full font-bold text-base text-coffee-brown cursor-pointer transition-colors duration-300 hover:bg-golden-dark">Explore More</button>
    </section>
  );
}

export default WhyChooseUs;
