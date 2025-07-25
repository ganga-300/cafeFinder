import React from 'react';

const faqs = [
  {
    question: 'How do I book a cafe?',
    answer: "Simply click on the 'Book Now' button and follow the instructions.",
  },
  {
    question: 'Are the reviews genuine?',
    answer: 'Yes, all reviews are from real users who have visited the cafes.',
  },
  {
    question: 'Can I suggest a cafe?',
    answer: 'Absolutely! Use our contact form to suggest new cafes.',
  },
];

const FAQs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white text-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-yellow-700 drop-shadow">Frequently Asked Questions</h2>
        <ul className="space-y-6">
          {faqs.map((faq, idx) => (
            <li key={idx} className="bg-white p-6 rounded-lg shadow border border-yellow-100">
              <strong className="block text-lg text-yellow-700 mb-2">{faq.question}</strong>
              <p className="text-gray-700">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQs; 