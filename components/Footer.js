import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-warm-cream text-coffee-light py-16 px-4 md:px-10 border-t-2 border-yellow-200 shadow-2xl'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl text-coffee-dark mb-3 font-bold font-pacifico">Bean Scene</h2>
            <p className="text-base text-coffee-light leading-relaxed font-poppins">
              Discover your next favorite café—where ambiance meets aroma. We connect coffee lovers with the perfect spots.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl text-amber-800 mb-4 font-semibold font-playfair">Quick Links</h3>
            <ul className="list-none p-0 space-y-3">
              <li><Link href='/' className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">Home</Link></li>
              <li><Link href='/about' className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">About Us</Link></li>
              <li><Link href='/contact' className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">Contact</Link></li>
              <li><Link href='/blogs' className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">Blogs</Link></li>
              <li><Link href='/booking' className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">Book a Table</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-amber-800 mb-4 font-semibold font-playfair">Contact</h3>
            <ul className="list-none p-0 space-y-3">
              <li className="text-base text-coffee-light font-poppins">Email: support@beanscene.com</li>
              <li className="text-base text-coffee-light font-poppins">Phone: +1-234-567-8910</li>
              <li className="text-base text-coffee-light font-poppins">Location: Coffee Street, Bean City</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-amber-800 mb-4 font-semibold font-playfair">Follow Us</h3>
            <ul className="list-none p-0 space-y-3">
              <li><a href="#" className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">Instagram</a></li>
              <li><a href="#" className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">Twitter</a></li>
              <li><a href="#" className="text-coffee-light font-medium hover:text-golden hover:underline transition-colors duration-300 font-poppins">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-coffee-light border-t border-yellow-300 pt-5">
          <p className="font-poppins">&copy; 2025 Bean Scene. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}