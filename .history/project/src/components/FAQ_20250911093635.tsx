import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I transition my pet to Tinku & Co. food?",
      answer: "Gradually transition over 7-10 days by mixing increasing amounts of Tinku & Co. with your pet's current food. Start with 25% new food for 2-3 days, then 50% for 2-3 days, then 75% for 2-3 days, and finally 100% Tinku & Co."
    },
    {
      question: "What makes Tinku & Co. different from other pet foods?",
      answer: "Our foods are backed by over 50 years of scientific research, formulated by veterinary nutritionists, and tested in our own research facilities. We use only high-quality ingredients and have strict quality control measures throughout production."
    },
    {
      question: "Is Tinku & Co. suitable for pets with allergies?",
      answer: "We offer specialized formulas for pets with food sensitivities and allergies. Our limited ingredient diets and novel protein sources can help manage allergic reactions. Consult with your veterinarian to determine the best option for your pet."
    },
    {
      question: "How much should I feed my pet?",
      answer: "Feeding amounts depend on your pet's age, weight, activity level, and health status. Use our feeding guidelines on the package as a starting point, and adjust based on your pet's body condition. Your veterinarian can provide personalized recommendations."
    },
    {
      question: "Can I mix wet and dry food?",
      answer: "Yes! Many pet owners successfully combine wet and dry food. This can provide variety in texture and taste while maintaining balanced nutrition. Just be sure to adjust portions to avoid overfeeding."
    },
    {
      question: "What if my pet doesn't like the new food?",
      answer: "We offer a satisfaction guarantee. If your pet doesn't love our food, contact our customer service team. We may recommend trying a different formula or provide guidance on transitioning techniques."
    },
    {
      question: "Are your ingredients sourced responsibly?",
      answer: "Absolutely. We work with trusted suppliers who meet our strict quality and sustainability standards. Our ingredients are sourced from approved facilities and undergo rigorous testing for safety and nutritional value."
    },
    {
      question: "Do you offer prescription diets?",
      answer: "Yes, we have a complete line of therapeutic nutrition products available through veterinarians. These are specially formulated to help manage specific health conditions and require veterinary supervision."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-6">
            Frequently Asked
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
            Questions
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about pet nutrition, feeding guidelines, 
            and our products from our team of experts.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;