import { FaCoffee, FaGift, FaUtensils } from "react-icons/fa"

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-10 bg-cream text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-3 font-playfair">Why Choose Us?</h2>
        <p className="text-lg text-gray-500 mb-10 font-poppins max-w-2xl mx-auto">
          We're not just about coffee — we're about bringing you the best experience every day!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-4xl mx-auto">
          <div className="bg-yellow-50 py-8 px-5 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <FaCoffee size={50} className="text-coffee-brown" />
            </div>
            <h3 className="text-xl text-coffee-brown mb-3 font-playfair font-semibold">Best Coffee</h3>
            <p className="text-sm text-gray-500 font-poppins">Only the finest beans, roasted to perfection for you.</p>
          </div>
          
          <div className="bg-yellow-50 py-8 px-5 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <FaGift size={50} className="text-coffee-brown" />
            </div>
            <h3 className="text-xl text-coffee-brown mb-3 font-playfair font-semibold">Exciting Offers</h3>
            <p className="text-sm text-gray-500 font-poppins">Unbeatable deals and exclusive combos daily!</p>
          </div>
          
          <div className="bg-yellow-50 py-8 px-5 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <FaUtensils size={50} className="text-coffee-brown" />
            </div>
            <h3 className="text-xl text-coffee-brown mb-3 font-playfair font-semibold">Explore Menus</h3>
            <p className="text-sm text-gray-500 font-poppins">Diverse menus curated for every coffee lover's taste.</p>
          </div>
        </div>

        <p className="text-lg text-coffee-brown mb-5 font-poppins">
          Your perfect cup of coffee is just a click away. Dive into the rich world of flavors!
        </p>

        <button className="px-8 py-3 bg-golden border-none rounded-full font-bold text-base text-coffee-brown cursor-pointer transition-colors duration-300 hover:bg-golden-dark">
          Explore More
        </button>
      </div>
    </section>
  )
}