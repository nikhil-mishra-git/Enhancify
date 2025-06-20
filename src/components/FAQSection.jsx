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
      <section className="pt-20 text-white">
        <div className="text-center md:text-left space-y-6 mb-12">
          <h2 className="text-[7vw] md:text-5xl tracking-tight leading-snug">
            Got Questions? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d5fff] to-[#a97fff]">
              We've Got Answers
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left cursor-pointer"
                >
                  <span className="text-base md:text-lg font-medium">
                    {faq.question}
                  </span>
                  <span className="text-purple-300">
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
