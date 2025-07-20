import React from 'react'




function About() {

  return (
    <>
      <div className='py-24 px-16 bg-orange-50 font-poppins text-gray-700 mt-20'>
        <div className='text-center mb-16 bg-transparent p-5'>
          <h1 className="text-5xl font-bold text-gray-800 mb-3 font-playfair tracking-wide">About Bean Scene</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-poppins bg-yellow-100 py-3 px-6 rounded-xl">Discover your next favorite café—where ambiance meets aroma.</p>
        </div>

        <div className='flex justify-center items-center'>
          <div className='bg-white shadow-2xl rounded-2xl p-10 flex gap-10 items-center max-w-5xl transition-transform duration-300 hover:-translate-y-1'>
            <p className='flex-1 text-base leading-relaxed text-gray-600 font-poppins'>coffee shop finder app is designed to simplify the process of discovering the perfect coffee spot nearby. Whether you're in a new area or just looking to try something different, the app allows users to easily search for coffee shops based on location, ratings, and menu options. Users can also contribute by leaving reviews, sharing their favorite spots, and browsing through detailed menus, helping others find the best places for a caffeine fix. With its user-friendly interface and focus on local coffee culture, your app makes it easier for coffee lovers to explore, connect, and enjoy their favorite beverages in the most convenient way possible.</p>
            <img 
              alt='Modern coffee shop interior with comfortable seating and warm lighting' 
              src='/cafe image.jpg' 
              className="flex-1 max-w-lg h-auto rounded-2xl object-cover shadow-lg"
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800';
              }}
            />
          </div>
        </div>

        <div className='bg-yellow-100 py-20 px-16 text-center mt-16 rounded-2xl shadow-lg'>
          <h2 className='text-4xl font-bold text-gray-800 mb-5 font-playfair inline-block border-b-2 border-yellow-600 pb-2 tracking-wide'>Our Vision</h2>
          <p className='max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 font-poppins'>
            Bean Scene was created out of a simple frustration—finding a good café
            shouldn’t be a guessing game. I wanted to build a platform that makes discovering
            cozy, Wi-Fi-friendly cafés as easy as ordering your favorite brew.
            Whether you're working remotely, catching up with a friend, or just craving a
            peaceful vibe, Bean Scene helps you find the perfect spot.<br /><br />
            It’s more than a café finder—it's a way to connect people with the spaces that
            match their mood, purpose, and lifestyle.
          </p>
        </div>

        <div className="py-16 px-16 bg-orange-50 font-poppins text-gray-700">
          <h2 className="text-3xl text-center mb-8 font-semibold font-playfair text-gray-800 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-yellow-700 after:mx-auto after:mt-3 after:rounded">Moodboard Vibes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-3">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/vintage.jpg" 
                alt="Vintage coffee shop corner with antique furniture and warm ambiance" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">Vintage corners</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/working-zones.jpg" 
                alt="Coffee shop workspace with laptops, Wi-Fi, and comfortable work environment" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">Wi-Fi & Work Zones</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/lighting.jpg" 
                alt="Warm and cozy coffee shop lighting creating perfect ambiance" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">Cozy lighting goals</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/nature.jpg" 
                alt="Coffee shop with natural elements, plants, and peaceful nooks" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">Nature & Nooks</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/outdoor-seating.jpg" 
                alt="Outdoor coffee shop patio with comfortable seating and fresh air" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">Patio & Outdoor Seating</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/decor.jpg" 
                alt="Coffee shop with artistic décor, wall art, and creative interior design" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">Artistic Décor</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/best-coffee.jpg" 
                alt="Premium coffee beans and expertly crafted coffee representing the best quality" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">best coffee</p>
            </div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
              <img 
                src="/coffee.jpg" 
                alt="Skilled barista crafting coffee with precision and artistry" 
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400';
                }}
              />
              <p className="absolute bottom-0 left-0 right-0 py-4 text-base text-center bg-white/70 font-bold tracking-wide rounded-b-2xl transition-colors duration-300 hover:bg-black/70 hover:text-white">Barista Craft</p>
            </div>
          </div>
          
        </div>

       
        
      </div>
    </>
  )
}

export default About