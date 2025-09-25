import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { Projects } from '../constants/index.js';
import CanvasLoader from '../canvas/Loading.jsx';
import DemoComputer from '../canvas/DemoComputer.jsx';

const projectCount = Projects.length;

const Projectsection = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(0);

  const currentProject = useMemo(() => Projects[selectedProjectIndex], [selectedProjectIndex]);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
    setForceUpdate(prev => prev + 1);
  };

  useGSAP(() => {
    gsap.killTweensOf('.animatedText');
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  return (
    <section key={forceUpdate} className="c-space my-20">
      {/* Hidden preload videos */}
      <div style={{ display: 'none' }}>
        {Projects.map((project, index) => (
          <video key={index} src={project.texture} preload="auto" muted loop />
        ))}
      </div>

      <p className="head-text">My Selected Work</p>
      <p className="text-white text-center">Project {selectedProjectIndex + 1} of {projectCount}</p>

      <div className="flex justify-center items-center gap-10 mt-10 mb-10">

        <button
          type="button"
          className="arrow-btn"
          onMouseDown={(e) => { e.preventDefault(); handleNavigation('previous'); }}
          onClick={() => handleNavigation('previous')}
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1) !important',
            borderColor: 'red !important',
            cursor: 'pointer !important'
          }}
        >
          Previous
        </button>

        <button
          type="button"
          className="arrow-btn"
          onMouseDown={(e) => { e.preventDefault(); handleNavigation('next'); }}
          onClick={() => handleNavigation('next')}
          style={{
            backgroundColor: 'rgba(0, 0, 255, 0.1) !important',
            borderColor: 'blue !important',
            cursor: 'pointer !important'
          }}
        >
          Next
        </button>

      </div>

      <div className="flex justify-center items-center mt-10 mb-10">
        <a
          key={currentProject.href}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl border-2 border-blue-400"
          href={currentProject.href || 'https://github.com'}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
          Check Github repo →
        </a>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas dpr={[1, 1.5]}>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer key={selectedProjectIndex} texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projectsection;

