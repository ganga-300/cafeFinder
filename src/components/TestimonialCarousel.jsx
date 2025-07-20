import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    review: 'The coffee is absolutely amazing! Best café in town!',
    image: '/review1.avif'
  },
  {
    name: 'Sophie Lee',
    review: 'A cozy atmosphere and incredible coffee flavors.',
    image: '/review2.avif'
  },
  {
    name: 'David Smith',
    review: 'Fast service and great taste! I love their espresso.',
    image: '/review.avif'
  },
  {
    name: 'Mark Brown',
    review: 'The best place to chill and work while sipping great coffee.',
    image: '/review3.avif'
  },
  {
    name: 'Mark Brown',
    review: 'The best place to chill and work while sipping great coffee.',
    image: '/review3.avif'
  },
  {
    name: 'Alice Johnson',
    review: 'The coffee is absolutely amazing! Best café in town!',
    image: '/review1.avif'
  },
  

];

function TestimonialCarousel() {
  return (
    <div className="py-16 px-10 bg-cream text-center overflow-hidden">
      <h2 className="text-4xl text-coffee-brown mb-10">What Our Customers Say</h2>
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-5 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <div className="flex-none w-80 bg-white rounded-2xl p-8 shadow-lg text-center snap-center transition-transform duration-300 hover:scale-105" key={index}>
            <img 
              src={testimonial.image} 
              alt={`${testimonial.name} - Customer testimonial photo`} 
              className="w-20 h-20 object-cover rounded-full mb-5 mx-auto border-2 border-golden"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200';
              }}
            />
            <p className="text-base text-gray-500 mb-4">"{testimonial.review}"</p>
            <h4 className="text-lg text-coffee-brown font-bold">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
