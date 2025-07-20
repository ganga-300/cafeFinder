import React from 'react';

function Contact() {
  return (
    <div className="py-16 px-10 bg-cream text-center">
      <h2 className="text-4xl font-bold text-coffee-brown mb-8">Contact Us</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-coffee-brown mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-golden"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-golden"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-golden"
            ></textarea>
            <button className="w-full bg-golden text-coffee-brown font-bold py-3 rounded-lg hover:bg-golden-dark transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-coffee-brown mb-4">Contact Information</h3>
          <div className="space-y-4 text-left">
            <div>
              <h4 className="font-semibold text-coffee-brown">Address</h4>
              <p className="text-gray-600">123 Coffee Street, Bean City, BC 12345</p>
            </div>
            <div>
              <h4 className="font-semibold text-coffee-brown">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold text-coffee-brown">Email</h4>
              <p className="text-gray-600">hello@beanscene.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-coffee-brown">Hours</h4>
              <p className="text-gray-600">Mon-Fri: 7AM-8PM<br />Sat-Sun: 8AM-9PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;