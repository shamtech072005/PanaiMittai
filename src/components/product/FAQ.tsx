import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle,
  index
}) => {
  return (
    <motion.div 
      className="border-b border-primary-200 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-primary-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary-500" />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-primary-700">{answer}</p>
      </div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems = [
    {
      question: "How is palm sugar different from regular sugar?",
      answer: "Palm sugar is less processed than regular refined sugar and contains more essential nutrients and minerals. It has a lower glycemic index, which means it causes a slower rise in blood glucose levels. Our palm sugar also has a unique, rich caramel-like flavor that enhances beverages and dishes."
    },
    {
      question: "How should I store the palm sugar powder?",
      answer: "Store the palm sugar powder in a cool, dry place away from direct sunlight. Keep the pouch sealed tightly after opening to prevent moisture from entering. It does not need refrigeration, but ensure it's stored in an airtight container for maximum freshness and shelf life."
    },
    {
      question: "What is the shelf life of your palm sugar powder?",
      answer: "When properly stored, our palm sugar powder has a shelf life of 12 months from the manufacturing date. Each package has a batch number and expiry date printed on it. The natural preservation properties of pure palm sugar help maintain its quality over time without any additives."
    },
    {
      question: "Is this product suitable for diabetics?",
      answer: "While our palm sugar has a lower glycemic index compared to refined sugar, it still contains natural sugars. Diabetics should consult their healthcare provider before incorporating it into their diet. Many customers with blood sugar concerns use it in moderation as part of a balanced diet."
    },
    {
      question: "Do you offer bulk quantities for resellers?",
      answer: "Yes, we offer bulk quantities for resellers, wellness centers, and health food stores. Please contact us directly through our Contact page or email for wholesale pricing and minimum order quantities. We provide special packaging and branding options for bulk orders as well."
    },
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-900 mb-4">
              Frequently Asked <span className="text-accent-600">Questions</span>
            </h2>
            <p className="text-primary-700">
              Have questions about our palm sugar? Find answers to the most common queries below.
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-md p-6">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>
          
          <motion.p 
            className="text-center mt-8 text-primary-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Don't see your question here? <a href="/contact" className="text-accent-600 hover:underline">Contact us</a> and we'll be happy to help.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;