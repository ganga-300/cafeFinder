import React from 'react';

const aboutData = {
  title: 'About CafeFinder',
  paragraphs: [
    'CafeFinder is your go-to platform for discovering the best cafes in your city. We curate top spots, provide real reviews, and make booking easy for coffee lovers everywhere.',
    'Our mission is to connect people with great coffee experiences, one cafe at a time.'
  ],
  image: '/cafe image.jpg',
};

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <img
          src={aboutData.image}
          alt="About CafeFinder"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover mb-8 md:mb-0"
        />
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-700 drop-shadow">{aboutData.title}</h2>
          {aboutData.paragraphs.map((p, idx) => (
            <p key={idx} className="mb-4 text-lg text-gray-700 leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 