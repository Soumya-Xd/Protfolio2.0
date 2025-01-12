import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion"; // For smooth animation effects
import { useState, useEffect } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assuming mobile devices are < 768px
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh", // Ensures it's vertically centered
      }}
    >
      {/* Spinning Loader */}
      <motion.div
        className="loader-circle"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #B4B8B1",
          borderTop: "5px solid #D1D3D4",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      ></motion.div>

      {/* Progress Text */}
      <p
        style={{
          fontSize: "18px",
          color: "#fff",
          fontWeight: "bold",
          marginTop: "10px",
          letterSpacing: "2px",
          textShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // Soft shadow for the text
        }}
      >
        Loading {progress.toFixed(2)}%
      </p>

      {/* Message for Mobile Devices */}
      {isMobile && (
        <p
          style={{
            fontSize: "14px",
            color: "#fff",
            fontStyle: "italic",
            marginTop: "20px",
            textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          For a better experience, please use a desktop.
        </p>
      )}
    </Html>
  );
};

export default CanvasLoader;
