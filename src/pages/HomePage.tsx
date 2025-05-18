import React from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;