'use client'
import Image from 'next/image'

export default function HeroSection() {
  const handleOrderClick = () => {
    const searchBar = document.getElementById('search-bar')
    if (searchBar) {
      searchBar.scrollIntoView({ behavior: 'smooth' })
      searchBar.focus()
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden" role="banner">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/capstonemain.png"
          alt="Coffee shop hero background - warm and inviting atmosphere"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920'
          }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl text-white">
            <h4 className="text-lg md:text-xl mb-2 font-poppins">We've got your morning covered with</h4>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-great-vibes mb-4 text-golden">Coffee</h1>
            <p className="text-base md:text-lg mb-8 font-poppins leading-relaxed max-w-xl">
              It is best to start your day with a cup of coffee. Discover the best flavours
              coffee you will ever have. We provide the best for our customers.
            </p>
            <button 
              className="px-8 py-3 bg-golden border-none rounded-full text-base font-bold cursor-pointer shadow-lg hover:bg-golden-dark hover:scale-105 transition-all duration-300 text-coffee-brown" 
              onClick={handleOrderClick}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}