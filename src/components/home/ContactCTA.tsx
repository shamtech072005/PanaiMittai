import React from 'react';
import { ArrowRight, Phone, MessageSquare, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-primary-900 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-50 mb-4">Have Questions or <span className="text-accent-400">Ready to Order?</span></h2>
            <p className="text-primary-200 mb-6">
              We're here to help you with any questions you might have about our product, 
              shipping, or health benefits. Reach out to us today.
            </p>
            <Link to="/contact" className="btn-primary">
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start">
              <div className="bg-primary-800 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-primary-50 text-lg font-medium mb-1">Call Us</h3>
                <p className="text-primary-200">+91 82703 95411</p>
                <p className="text-primary-300 text-sm">Available Mon-Sat, 9am-6pm</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-800 p-3 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-primary-50 text-lg font-medium mb-1">WhatsApp</h3>
                <p className="text-primary-200">+91 82703 95411</p>
                <p className="text-primary-300 text-sm">Quick responses on WhatsApp</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-800 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-primary-50 text-lg font-medium mb-1">Email</h3>
                <p className="text-primary-200">info@natursweet.com</p>
                <p className="text-primary-300 text-sm">We'll respond within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;