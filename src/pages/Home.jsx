import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { Island } from "../models/Island";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";
import { useState } from "react";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
const [isRotating, setIsRotating] = useState(false);
const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43]; // Default position for larger screens.
    let rotation = [0.1, 4.7, 0]; // Default rotation for larger screens.
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; // Scale down for mobile.
      // Adjust position for mobile.
    } else {
      screenScale = [1, 1, 1]; // Default scale for larger screens.
      // Adjust position for larger screens.
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    
    let screenScale, screenPosition; // Default position for larger screens.
     // Default rotation for larger screens.
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]; // Scale down for mobile.
        screenPosition = [0, -1.5, 0]; // Adjust position for mobile.
    } else {
      screenScale = [3, 3, 3]; // Default scale for larger screens.
       screenPosition = [0, -4, -4]; // Adjust position for larger screens.
    }
    return [screenScale, screenPosition];
  };


  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-20 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        dpr={[1, 1.5]}
      >
        {/* Your 3D content goes here */}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="b1e1ff"
            groundColor="#000000"
            intensity={0.3}
          />
          <Bird />
          <Sky  isRotating={isRotating}/>
          {/** Sky component that adds a rotating sky effect. */}
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
          isRotating={isRotating}
          position={planePosition}
          scale={planeScale}
          rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
