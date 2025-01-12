import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect mobile screen size
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);

  return (
    <section className="w-full h-full p-8 mt-20" id="tech">
      {/* Title Section */}
      <div className="text-center mx-auto mb-8">
        <p className="text-sm text-secondary tracking-wider uppercase">
          What I have learnt so far
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
      </div>

      {/* Grid Layout */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className="relative flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Icon or Image */}
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4"
            />

            {/* Label */}
            <p className="text-white text-center text-xs sm:text-sm font-medium">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
