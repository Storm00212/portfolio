import React from 'react'
import AboutHeroSection from './AboutHeroSection';
import Description from './Description';
import Education from './Education';
import Tech from './Tech';
import { herobg } from '../assets';

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
      }}
    >
      <AboutHeroSection />
      <Description />
      <Education />
      <Tech />
      
      {/* ...other content... */}
      <style>
        {`
          @media (max-width: 600px) {
            div[style] {
              padding: 12px !important;
            }
            h1, h2, h3, p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
