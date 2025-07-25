import React from 'react';

const testimonials = [
  {
    name: 'Ava',
    review: 'Amazing coffee and cozy atmosphere! Highly recommend CafeFinder.',
    avatar: '/review1.avif',
  },
  {
    name: 'Liam',
    review: 'Booking was super easy and the reviews were spot on.',
    avatar: '/review2.avif',
  },
  {
    name: 'Sophia',
    review: 'Found my new favorite cafe thanks to this site!',
    avatar: '/review3.avif',
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-yellow-700 drop-shadow">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg text-center border border-yellow-100 hover:shadow-2xl transition-shadow"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-300 shadow"
              />
              <p className="italic mb-2 text-gray-700">"{t.review}"</p>
              <span className="font-semibold text-yellow-700">- {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel; 