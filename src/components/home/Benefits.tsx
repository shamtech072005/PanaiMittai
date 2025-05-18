import React from 'react';
import { Leaf, ShieldCheck, Droplets, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="benefit-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center text-primary-700 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary-900">{title}</h3>
      <p className="text-primary-700">{description}</p>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'Supports Digestion',
      description: 'Natural enzymes and minerals that aid in proper digestion and gut health.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Boosts Immunity',
      description: 'Rich in antioxidants that strengthen your immune system and overall health.',
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: '100% Natural',
      description: 'No additives, preservatives, or artificial ingredients. Just pure palm sugar.',
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: 'Traditionally Processed',
      description: 'Harvested and processed using time-honored methods to preserve nutrients.',
    },
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            className="text-primary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Natural Goodness, <span className="text-accent-600">Real Benefits</span>
          </motion.h2>
          <motion.p 
            className="text-primary-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our medicinal palm sugar powder offers numerous health benefits, backed by centuries of traditional use
            and modern nutritional science.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;