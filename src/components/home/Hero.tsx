import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-primary-950/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 mt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full mb-4">
              100% Natural & Pure
            </span>
            <h1 className="text-primary-50 mb-6">
              Premium Medicinal<br />
              <span className="text-accent-400">Palm Sugar Powder</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-primary-100 text-lg mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the authentic taste and exceptional health benefits of our
            traditional, additive-free palm sugar. Sourced directly from natural
            palm trees and processed using time-honored methods.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/product" className="btn-primary">
              <span>Buy Right Now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/about" className="btn-outline border-primary-50 text-primary-50 hover:bg-primary-50/10">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;