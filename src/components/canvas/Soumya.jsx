import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls, Preload } from "@react-three/drei";
import { gsap } from "gsap";
import CanvasLoader from "../Loader";

const SoumyaCharacter = ({ isMobile }) => {
  const character = useGLTF("./soumya/result.gltf");
  const characterRef = useRef();

  return (
    <Float
      speed={2} // Floating speed
      rotationIntensity={0.8} // Smooth rotational animation
      floatIntensity={0} // Keeps the position constant (no floating along axes)
    >
      <mesh ref={characterRef}>
        {/* Lighting adjustments */}
        <hemisphereLight intensity={0.9} groundColor="black" />
        <spotLight
          position={[-15, 40, 15]}
          angle={0.5} // Wider spotlight angle
          penumbra={1}
          intensity={4} // Increased spotlight intensity for brighter light
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1.5} position={[10, 10, 10]} /> {/* Add another point light for better illumination */}
        <primitive
          object={character.scene}
          scale={isMobile ? 2.5 : 3} // Larger model for both mobile and desktop
          position={isMobile ? [0, -1, 0] : [0, -1, 0]} // Moved upwards: y-value decreased for both mobile and desktop
          rotation={[-0.01, 0, 0]} // Kept rotation fixed
        />
      </mesh>
    </Float>
  );
};

const SoumyaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 3, 10], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SoumyaCharacter isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SoumyaCanvas;
