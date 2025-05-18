import React from 'react';
import { Leaf, Heart, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Value: React.FC<ValueProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
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

const Mission: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability",
      description: "We utilize sustainable harvesting methods that protect and preserve palm trees, ensuring they continue to thrive for generations.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Purity",
      description: "We're committed to delivering palm sugar in its purest form, free from additives, preservatives, or unnecessary processing.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Support",
      description: "We partner with local artisans and farmers, ensuring fair compensation and supporting traditional methods of production.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health Consciousness",
      description: "We believe in the power of natural ingredients to promote wellness and offer alternatives to highly refined products.",
    },
  ];

  return (
    <section className="py-20 bg-texture bg-cover bg-fixed">
      <div className="bg-primary-900/80 py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-50 mb-4">
              Our Mission & <span className="text-accent-400">Values</span>
            </h2>
            <p className="text-primary-200">
              At NaturSweet, we're committed to preserving traditional methods while promoting 
              health and sustainability. Our mission is to bring nature's perfect sweetener 
              to your home while supporting the communities that produce it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Value
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;