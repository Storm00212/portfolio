import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../pages/Loader";
import { isLowEndDevice } from "../utils/device";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const lowEnd = isLowEndDevice();

  const ballContent = (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );

  return lowEnd ? ballContent : (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      {ballContent}
    </Float>
  );
};

const BallCanvas = React.memo(({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
});

export default BallCanvas;
