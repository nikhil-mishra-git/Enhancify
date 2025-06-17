import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Container } from '../components';

const faqs = [
  {
    question: "Is this free?",
    answer: "Yes, Enhancify offers free basic enhancements. Premium features may be added in future.",
  },
  {
    question: "Do you store my images?",
    answer: "No, your images are processed securely and temporarily. We respect your privacy.",
  },
  {
    question: "What file types are supported?",
    answer: "Enhancify supports JPEG, PNG, and WEBP formats.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Container>
      <section className="py-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
          Help & FAQ
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300  shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="text-purple-300 cursor-pointer">
                    {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default FAQSection;
