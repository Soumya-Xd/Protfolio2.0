import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls, Preload } from "@react-three/drei";
import { gsap } from "gsap";
import CanvasLoader from "../Loader";

const Robot = ({ isMobile }) => {
  const robot = useGLTF("./Robot/scene.gltf");
  const robotRef = useRef();
  const [isCentered, setIsCentered] = useState(false);

  // Function to handle the animation when clicked
  const handleClick = () => {
    setIsCentered(!isCentered); // Toggle state
    gsap.to(robotRef.current.position, {
      x: isCentered ? -3 : 0,  // Reduce the movement range for smaller path
      z: isCentered ? -3 : 0,  // Same for Z position
      duration: 2,  // Animation duration
      ease: "power1.inOut", // Easing for smooth animation
    });
  };

  return (
    <Float
      speed={1.75}
      rotationIntensity={1.65}
      floatIntensity={2.25}
      floating
      floatSpeed={1.5}
      smoothness={0.25}
      easing="ease-in-out"
    >
      <mesh ref={robotRef} onClick={handleClick}>
        <hemisphereLight intensity={3.2} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={robot.scene}
          scale={isMobile ? 1.5 : 2.2} // Reduced scale on mobile
          position={isMobile ? [0, -2, -2] : [0, -3.25, -1.5]} // Adjusted position for mobile
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </Float>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[5, 3]}
      camera={{ position: [15, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
