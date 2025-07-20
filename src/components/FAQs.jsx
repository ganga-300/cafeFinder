import React, { useState } from 'react';

const faqData = [
  {
    question: "How do I find cafes near me?",
    answer: "Use our location-based search to discover nearby cafes with ratings, menus, and reviews."
  },
  {
    question: "Can I see the cafe’s menu before visiting?",
    answer: "Yes, each listed cafe includes a digital menu so you can preview items before going."
  },
  {
    question: "Do you offer user reviews and ratings?",
    answer: "Absolutely! You can read and submit reviews to help others make informed choices."
  },
  {
    question: "Is the platform free to use?",
    answer: "Yes, our platform is completely free for users looking to explore cafes."
  },
];

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="py-16 px-10 bg-orange-100 max-w-4xl mx-auto font-sans">
      <h2 className="text-3xl text-amber-900 text-center mb-10">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => (
          <div
            className={`bg-white rounded-xl shadow-lg py-5 px-6 cursor-pointer transition-all duration-300`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">{item.question}</span>
              <span className={`text-xs transition-transform duration-300 text-amber-900 ${activeIndex === index ? 'rotate-180' : ''}`}>&#9660;</span>
            </div>
            <div className={`text-base text-gray-600 mt-3 transition-all duration-300 ${activeIndex === index ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
