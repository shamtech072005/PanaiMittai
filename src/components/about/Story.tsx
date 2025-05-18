import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <section className="py-24 bg-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full mb-4">
              Our Journey
            </span>
            <h1 className="text-primary-900 mb-6">🌿 Our Story – Paanai Mittai</h1>
            <div className="space-y-4 text-primary-700">
                <p>
                <strong className="text-brown-700 text-xl">Paanai Mittai</strong> was born in <strong>May 2025</strong> out of a dream by our founder, <strong>Sumathi</strong> — 
                to revive the lost art of <strong>traditional palm sugar making</strong> and deliver its <em>natural sweetness</em> to every health-conscious home.
              </p>

              <p>
                In the heart of <strong>Vedapatti, Tamil Nadu</strong>, she discovered the age-old practice of tapping palm trees at sunrise. 
                <strong>Experienced “panai maram” climbers</strong> would scale tall palms with grace, harvesting <strong>pure, mineral-rich sap</strong> — 
                a tradition passed down for generations.
              </p>

              <p>
                That sap is <strong>slow-boiled over wood fire in clay pots</strong>, without a single drop of chemical or preservative — 
                resulting in <strong>unrefined palm sugar</strong> that’s rich in <em>taste, nutrients, and heritage</em>.
              </p>

              <p>
                Moved by the <strong>purity</strong> of the process and the <strong>honor of the craft</strong>, Sumathi realized: 
                <em>this kind of palm sugar simply didn’t exist in modern markets</em> — what you find is often filled with 
                <strong>additives, bleaching agents, or over-processing</strong>.
              </p>

              <p>
                And so, <strong>Paanai Mittai</strong> was created — to deliver <strong>100% natural, handcrafted palm sugar</strong> made the 
                <strong>authentic way</strong>, while uplifting the communities that make it possible.
              </p>

              <p>
                Today, we proudly partner with <strong>local farmers and skilled climbers</strong> in Vedapatti, offering them 
                <strong>fair wages</strong> and preserving a <strong>sustainable, traditional way of life</strong>.
              </p>

              <p className="text-green-700 font-semibold text-xl">
                Every spoon of Paanai Mittai carries the <strong>essence of Tamil soil</strong>, the <strong>strength of ancient trees</strong>, 
                and the <strong>care of the hands that made it</strong>.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="public/images/panaistory.png" 
                alt="Palm trees" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="public/images/panaistory.png" 
                alt="Traditional processing" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;