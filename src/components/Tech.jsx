import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas"; // Import the BallCanvas component

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Detect mobile screen size
    };

    handleResize(); // Set the initial value
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up on unmount
    };
  }, []);

  const techVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section className="w-full h-full p-8 mt-20" id="tech">
      <div className="text-center mx-auto mb-8">
        <p className="sectionSubText">What I have learnt so far</p>
        <h2 className="sectionHeadText">Skills</h2>
      </div>

      <div
        className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'} gap-8`}
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className={`w-32 h-32 flex justify-center items-center ${
              isMobile ? 'bg-gray-200 dark:bg-gray-700' : 'relative'
            } rounded-xl shadow-md overflow-hidden`}
            variants={techVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {isMobile ? (
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            ) : (
              // BallCanvas is shown on desktop version
              <BallCanvas icon={technology.icon} />
            )}
            {!isMobile && (
              <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-white bg-black bg-opacity-50 rounded-lg py-1">
                {technology.name}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
