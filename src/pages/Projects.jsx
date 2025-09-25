import React from 'react';
import {projects} from "../assets";
import Projecthero from './Projecthero.jsx';
import Projectsection from './Projectsection.jsx';
import Experience from './Experience.jsx';
import Feedbacks from './Feedbacks.jsx';
const Projects = () => {
  return (
    <div 
    style={{
            backgroundColor: '#0B1B26',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px',
          }}>
      <Projecthero />
      <Projectsection />
      <Experience />
      <Feedbacks />
    </div>
  )
}

export default Projects;
