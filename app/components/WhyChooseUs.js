import React from 'react';

const features = [
  {
    title: 'Curated Cafes',
    description: 'We handpick the best cafes for you to explore and enjoy.',
    icon: (
      <svg className="w-10 h-10 mx-auto mb-2 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h8a2 2 0 002-2v-6" /></svg>
    ),
  },
  {
    title: 'Easy Booking',
    description: 'Reserve your spot at your favorite cafe in just a few clicks.',
    icon: (
      <svg className="w-10 h-10 mx-auto mb-2 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Trusted Reviews',
    description: 'Read real reviews from fellow coffee lovers before you visit.',
    icon: (
      <svg className="w-10 h-10 mx-auto mb-2 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.29a1 1 0 00.95.69h6.631c.969 0 1.371 1.24.588 1.81l-5.37 3.905a1 1 0 00-.364 1.118l2.036 6.29c.3.921-.755 1.688-1.54 1.118l-5.37-3.905a1 1 0 00-1.176 0l-5.37 3.905c-.784.57-1.838-.197-1.54-1.118l2.036-6.29a1 1 0 00-.364-1.118L2.342 11.717c-.783-.57-.38-1.81.588-1.81h6.631a1 1 0 00.95-.69l2.036-6.29z" /></svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-yellow-700 drop-shadow">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-yellow-100"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2 text-yellow-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 