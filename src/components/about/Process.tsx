import React from 'react';
import { motion } from 'framer-motion';

interface StepProps {
  number: number;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  delay: number;
}

const Step: React.FC<StepProps> = ({ 
  number, 
  title, 
  description, 
  image, 
  reverse = false,
  delay
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-16 last:mb-0`}>
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <div className="relative">
          <div className="absolute -top-4 -left-4 bg-accent-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            {number}
          </div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-3 text-primary-900">{title}</h3>
        <p className="text-primary-700">{description}</p>
      </motion.div>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sustainable Harvesting",
      description: "Our palm sugar starts with careful selection of mature palm trees. Skilled artisans climb these trees to collect the sweet sap, using traditional tapping techniques that don't harm the trees. Collection happens early in the morning when the sap quality is at its peak.",
      image: "public/images/SubstanableHarvesting.png"
    },
    {
      number: 2,
      title: "Traditional Processing",
      description: "The freshly collected sap is filtered and then slowly simmered in large, wide vessels over controlled heat. This traditional slow-cooking process can take several hours, allowing excess moisture to evaporate while preserving the natural nutrients and developing the rich, caramel-like flavor.",
      image: "public/images/TraditionalProcesing.png"
    },
    {
      number: 3,
      title: "Natural Cooling & Crystallization",
      description: "Once the sap reaches the right consistency, it's removed from heat and stirred continuously during cooling. This traditional stirring technique encourages crystallization, resulting in a granular texture. No artificial crystallization agents or anti-caking additives are ever used.",
      image: "public/images/naturalCooling.png"
    },
    {
      number: 4,
      title: "Quality Testing & Packaging",
      description: "Each batch undergoes rigorous quality testing for purity, taste, and consistency. Only the finest quality palm sugar makes it to packaging. We use eco-friendly, food-grade packaging that preserves freshness while minimizing environmental impact, sealing in all the natural goodness.",
      image: "public/images/TestingPacking.png"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full mb-4">
            From Tree to Table
          </span>
          <h2 className="text-primary-900 mb-4">
            Our Traditional <span className="text-accent-600">Process</span>
          </h2>
          <p className="text-primary-700">
            We take pride in our time-honored methods of harvesting and processing palm sugar, 
            preserving centuries of tradition while ensuring the highest quality product.
          </p>
        </motion.div>

        <div>
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              image={step.image}
              reverse={index % 2 !== 0}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;