import React from 'react';
import { NavLink } from 'react-router-dom';
import { PalmtreeIcon, Phone, Mail, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-primary-50 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <PalmtreeIcon className="w-8 h-8 mr-2 text-primary-50" />
              <span className="font-display text-xl font-bold text-primary-50">
              Paanai Inippu
              </span>
            </div>
            <p className="text-primary-200 mb-4">
              Premium 100% natural medicinal palm sugar powder. Traditional remedies for modern wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary-50">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Product', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-primary-200 hover:text-accent-300 transition-colors"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary-50">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-accent-400" />
                <span className="text-primary-200">+91 82703 95411</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-accent-400" />
                <span className="text-primary-200">WhatsApp: +91 82703 95411</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-accent-400" />
                <span className="text-primary-200">info@PaanaiInippu.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-primary-50">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-accent-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-accent-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary-200 hover:text-accent-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-6 text-center text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Paanai Inippu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;