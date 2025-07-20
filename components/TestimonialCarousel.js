import Image from 'next/image'

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
  }
]

export default function TestimonialCarousel() {
  return (
    <div className="py-16 px-4 md:px-10 bg-cream text-center overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-coffee-brown mb-10 font-playfair font-bold">What Our Customers Say</h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-5 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div className="flex-none w-80 bg-white rounded-2xl p-8 shadow-lg text-center snap-center transition-transform duration-300 hover:scale-105" key={index}>
              <div className="relative w-20 h-20 mx-auto mb-5">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} - Customer testimonial photo`}
                  fill
                  className="object-cover rounded-full border-2 border-golden"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
                  }}
                />
              </div>
              <p className="text-base text-gray-500 mb-4 font-poppins">"{testimonial.review}"</p>
              <h4 className="text-lg text-coffee-brown font-bold font-playfair">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}