import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PalmtreeIcon, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <PalmtreeIcon 
              className={`w-8 h-8 mr-2 ${isScrolled ? 'text-primary-700' : 'text-primary-50'}`} 
            />
            <span 
              className={`font-display text-xl font-bold ${
                isScrolled ? 'text-primary-900' : 'text-primary-50'
              }`}
            >
              Paanai Inippu
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Product', 'About', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-medium hover:text-accent-500 transition-colors ${
                    isActive
                      ? 'text-accent-500'
                      : isScrolled
                      ? 'text-primary-900'
                      : 'text-primary-50'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-primary-900' : 'text-primary-50'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary-900' : 'text-primary-50'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              {['Home', 'Product', 'About', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-medium text-primary-900 hover:text-accent-500 transition-colors ${
                      isActive ? 'text-accent-500' : ''
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;