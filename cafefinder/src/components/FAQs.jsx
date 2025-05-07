import React, { useState } from 'react';
import './FAQs.css';

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
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-header">
              <span className="faq-question">{item.question}</span>
              <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>&#9660;</span>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
