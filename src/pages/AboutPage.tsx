import React from 'react';
import Story from '../components/about/Story';
import Mission from '../components/about/Mission';
import Process from '../components/about/Process';

const AboutPage: React.FC = () => {
  return (
    <>
      <Story />
      <Mission />
      <Process />
    </>
  );
};

export default AboutPage;