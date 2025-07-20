import React from 'react';

const topPicks = [
  {
    name: "Espresso Delight",
    description: "Rich and bold espresso with perfect crema",
    price: "$4.50",
    image: "/espresssso.jpg"
  },
  {
    name: "Cappuccino Classic",
    description: "Smooth cappuccino with steamed milk foam",
    price: "$5.25",
    image: "/capp.jpg"
  },
  {
    name: "Cold Brew Special",
    description: "Refreshing cold brew with a hint of vanilla",
    price: "$4.75",
    image: "/coldd brew.jpg"
  },
  {
    name: "Artisan Latte",
    description: "Creamy latte with beautiful latte art",
    price: "$5.50",
    image: "/coffee.jpg"
  }
];

function TopPicks() {
  return (
    <section className="py-16 px-10 bg-warm-cream">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-coffee-brown mb-4">Our Top Picks</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our most popular coffee selections, carefully crafted by our expert baristas
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {topPicks.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={`${item.name} - ${item.description}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-coffee-brown mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-golden">{item.price}</span>
                <button className="bg-coffee-brown text-white px-4 py-2 rounded-full hover:bg-coffee-dark transition-colors duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopPicks;