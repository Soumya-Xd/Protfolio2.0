import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { RobotCanvas } from './canvas';
import Typed from 'typed.js'; // Import Typed.js

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state based on window width
    };

    // Set initial value on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Initialize Typed.js once the component mounts
    const options = {
      strings: ['Web Developer', 'Python Developer', 'ML Developer', 'Video Editor'],
      typeSpeed: 50, // Speed of typing
      backSpeed: 25, // Speed of erasing
      backDelay: 1000, // Delay before erasing starts
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop the animation
      showCursor: false, // Hide cursor
    };

    const typed = new Typed('#typed-element', options);

    return () => {
      typed.destroy(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#B4B8B1]" />
          <div className="w-1 sm:h-60 h-35 bg-gradient-to-t from-[#B4B8B1] via-[#D1D3D4] to-[#A8A8A8]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#000000]">Soumya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            and I'm a passionate <span id="typed-element"></span>
          </p>
        </div>
      </div>

      {/* Conditionally render RobotCanvas */}
      {!isMobile && <RobotCanvas />}
      
      <div className="absolute xs:bottom-0 bottom-28 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-3 mt-1">
            {!isMobile && (
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            )}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
