import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-warm-cream text-coffee-light py-16 px-10 border-t-2 border-yellow-200 shadow-2xl'>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
    <div className=''>
        <h2 className="text-3xl text-coffee-dark mb-3 font-bold">Bean scene</h2>
        <p className="text-base text-coffee-light leading-relaxed">Lorem ipsum dolor sit amet,abo nesciunt facilis hic obcaecati quasi libero!</p>
    </div>
    <div>
        <h3 className="text-xl text-amber-800 mb-4 font-semibold">Quick links</h3>
        <ul className="list-none p-0">
            <li className="mb-3 text-base text-coffee-light transition-colors duration-300"><a href='#' className="no-underline text-coffee-light font-medium hover:text-golden hover:underline">Home</a></li>
            <li className="mb-3 text-base text-coffee-light transition-colors duration-300"><a className="no-underline text-coffee-light font-medium hover:text-golden hover:underline">About us</a></li>
            <li className="mb-3 text-base text-coffee-light transition-colors duration-300"><a className="no-underline text-coffee-light font-medium hover:text-golden hover:underline">Contact</a></li>
            <li className="mb-3 text-base text-coffee-light transition-colors duration-300"><a className="no-underline text-coffee-light font-medium hover:text-golden hover:underline">Privacy policy</a></li>
            <li className="mb-3 text-base text-coffee-light transition-colors duration-300"><a className="no-underline text-coffee-light font-medium hover:text-golden hover:underline">Terms and conditions</a></li>
        </ul>
    </div>
    <div>
        <h3 className="text-xl text-amber-800 mb-4 font-semibold">Contact</h3>
        <ul className="list-none p-0">
            <li className="mb-3 text-base text-coffee-light"> Email: support@cafefinder.com</li>
            <li className="mb-3 text-base text-coffee-light"> Phone: +1-234-567-8910</li>
            <li className="mb-3 text-base text-coffee-light"> Location: Somewhere on Earth</li>
        </ul>
    </div>
    <div>
        <h3 className="text-xl text-amber-800 mb-4 font-semibold">Follow us</h3>
        <ul className="list-none p-0">
            <li className="mb-3 text-base text-coffee-light transition-colors duration-300"><a className="no-underline text-coffee-light font-medium hover:text-golden hover:underline">Instagram</a></li>
            <li className="mb-3 text-base text-coffee-light transition-colors duration-300"><a className="no-underline text-coffee-light font-medium hover:text-golden hover:underline">Twitter</a></li>
        </ul>
    </div>


    <div className="mt-12 text-center text-sm text-coffee-light border-t border-yellow-300 pt-5 col-span-full">
        &copy; 2025 CafeFinder. All rights reserved.
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer