import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../pages/Loader";
import { isVeryLowEndDevice } from "../utils/device";

const Computers = ({ isSmall, isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Responsive scaling and positioning
  const getResponsiveProps = () => {
    if (isSmall) {
      return {
        scale: 0.5,
        position: [0, -2.5, -2.5],
        cameraPosition: [20, 3, 5],
        fov: 35
      };
    } else if (isMobile) {
      return {
        scale: 0.6,
        position: [0, -3, -2.2],
        cameraPosition: [20, 3, 5],
        fov: 30
      };
    } else if (isTablet) {
      return {
        scale: 0.7,
        position: [0, -3.25, -1.8],
        cameraPosition: [20, 3, 5],
        fov: 28
      };
    } else {
      return {
        scale: 0.75,
        position: [0, -3.25, -1.5],
        cameraPosition: [20, 3, 5],
        fov: 25
      };
    }
  };

  const { scale, position } = getResponsiveProps();

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Media queries for different screen sizes
    const smallQuery = window.matchMedia("(max-width: 640px)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const tabletQuery = window.matchMedia("(max-width: 1024px)");

    // Set initial values
    setIsSmall(smallQuery.matches);
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches && !mobileQuery.matches);

    // Handlers
    const handleSmallChange = (e) => setIsSmall(e.matches);
    const handleMobileChange = (e) => {
      setIsMobile(e.matches);
      setIsTablet(tabletQuery.matches && !e.matches);
    };
    const handleTabletChange = (e) => setIsTablet(e.matches && !mobileQuery.matches);

    // Add listeners
    smallQuery.addEventListener("change", handleSmallChange);
    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    // Cleanup
    return () => {
      smallQuery.removeEventListener("change", handleSmallChange);
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  // Get responsive camera settings
  const getCameraSettings = () => {
    if (isSmall) return { position: [20, 3, 5], fov: 35 };
    if (isMobile) return { position: [20, 3, 5], fov: 30 };
    if (isTablet) return { position: [20, 3, 5], fov: 28 };
    return { position: [20, 3, 5], fov: 25 };
  };

  const cameraSettings = getCameraSettings();
  const veryLowEnd = isVeryLowEndDevice();

  // For very low-end devices, show a simple static image instead of 3D
  if (veryLowEnd) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-4xl">💻</span>
          </div>
          <p className="text-white text-lg">Interactive 3D Computer</p>
          <p className="text-gray-400 text-sm mt-2">Best viewed on desktop or high-end mobile devices</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      camera={cameraSettings}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isSmall={isSmall} isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default React.memo(ComputersCanvas);
