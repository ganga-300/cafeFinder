import React from 'react';

const contactFields = [
  { type: 'text', placeholder: 'Your Name', name: 'name' },
  { type: 'email', placeholder: 'Your Email', name: 'email' },
  { type: 'textarea', placeholder: 'Your Message', name: 'message', rows: 4 },
];

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50 text-gray-800">
      <div className="max-w-xl mx-auto px-4 bg-white rounded-lg shadow-lg p-8 border border-yellow-100">
        <h2 className="text-4xl font-extrabold mb-8 text-yellow-700 drop-shadow text-center">Contact Us</h2>
        <form className="space-y-6">
          {contactFields.map((field, idx) => (
            field.type === 'textarea' ? (
              <textarea
                key={field.name}
                placeholder={field.placeholder}
                name={field.name}
                rows={field.rows}
                className="w-full p-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
              />
            ) : (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                className="w-full p-3 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
              />
            )
          ))}
          <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-colors duration-200">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 