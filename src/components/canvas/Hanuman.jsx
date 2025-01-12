import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls, Preload, Environment, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Bloom } from "@react-three/postprocessing";

const SoumyaCharacter = ({ isMobile }) => {
  const character = useGLTF("./Hanuman/scene.gltf");
  const characterRef = useRef();
  const { animations } = character;
  const { actions } = useAnimations(animations, characterRef); // Using useAnimations hook

  useEffect(() => {
    if (actions["walking"]) { // Make sure the walking animation exists in your model
      actions["walking"].play(); // Play the walking animation
    }
  }, [actions]);

  return (
    <Float
      speed={2} // Floating speed
      rotationIntensity={0.4} // Smooth rotational animation removed
      floatIntensity={0.6} // Stronger floating along axes
    >
      <mesh ref={characterRef}>
        {/* Lighting adjustments */}
        <hemisphereLight intensity={0.5} groundColor="black" />
        <spotLight
          position={[-15, 30, 20]} // Positioned to effectively illuminate the model
          angle={0.7} // Wider spotlight angle for more even lighting
          penumbra={1}
          intensity={2} // Balanced spotlight intensity for a natural glow
          castShadow
          shadow-mapSize={2048} // Higher shadow resolution
        />
        <pointLight intensity={1.5} position={[5, 10, 5]} />
        <primitive
          object={character.scene}
          scale={isMobile ? 2.5 : 3} // Larger model for both mobile and desktop
          position={isMobile ? [0, -1.5, 0] : [0, -3.5, 0]} // Moved further down for desktop
          rotation={[-0.01, 0, 0]} // Kept rotation fixed
        >
          {/* Adding a metallic material with more realistic properties */}
          <meshStandardMaterial
            attach="material"
            metalness={0.9} // High metalness for a shiny look
            roughness={0.2} // Low roughness for a smoother surface
            clearcoat={0.3} // Clearcoat for enhanced surface finish
            color="#B0B0B0" // Slightly warmer metallic color
            normalMap={character.materials?.body?.normalMap} // Normal map for surface details
            roughnessMap={character.materials?.body?.roughnessMap} // Roughness map for better texture
          />
        </primitive>
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
      camera={{ position: [10, 5, 15], fov: 30 }} // Adjusted camera position
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false} // Removed auto-rotation
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SoumyaCharacter isMobile={isMobile} />
        <Environment preset="sunset" /> {/* Adding environment texture for realistic lighting */}
        <Bloom
          intensity={0.6} // Increased bloom intensity for a glowing effect
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        /> {/* Bloom effect for light and glow */}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SoumyaCanvas;
