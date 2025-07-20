export default function Contact() {
  return (
    <div className="py-16 px-4 md:px-10 bg-cream text-center mt-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-coffee-brown mb-8 font-playfair">Contact Us</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4 font-playfair">Get in Touch</h3>
            <p className="text-gray-600 mb-6 font-poppins">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-golden font-poppins"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-golden font-poppins"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-golden font-poppins"
              ></textarea>
              <button className="w-full bg-golden text-coffee-brown font-bold py-3 rounded-lg hover:bg-golden-dark transition-colors duration-300 font-poppins">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4 font-playfair">Contact Information</h3>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-semibold text-coffee-brown font-poppins">Address</h4>
                <p className="text-gray-600 font-poppins">123 Coffee Street, Bean City, BC 12345</p>
              </div>
              <div>
                <h4 className="font-semibold text-coffee-brown font-poppins">Phone</h4>
                <p className="text-gray-600 font-poppins">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-coffee-brown font-poppins">Email</h4>
                <p className="text-gray-600 font-poppins">hello@beanscene.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-coffee-brown font-poppins">Hours</h4>
                <p className="text-gray-600 font-poppins">Mon-Fri: 7AM-8PM<br />Sat-Sun: 8AM-9PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}