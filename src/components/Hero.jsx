import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { RobotCanvas } from './canvas';
import Typed from 'typed.js';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Python Developer', 'ML Developer', 'Video Editor'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed('#typed-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start md:gap-10 gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#B4B8B1]" />
          <div className="w-1 sm:h-60 h-35 bg-gradient-to-t from-[#B4B8B1] via-[#D1D3D4] to-[#A8A8A8]" />
        </div>

        <div className="flex flex-col justify-center items-start">
          <h1 className={`${styles.heroHeadText} text-white text-center md:text-left`}>
            Hi, I'm <span className="text-[#000000]">Soumya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center md:text-left`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center md:text-left`}>
            and I'm a passionate <span id="typed-element"></span>
          </p>
        </div>
        
      </div>

      {!isMobile && <RobotCanvas />}

      {isMobile && (
        <div className="absolute inset-0 flex justify-center items-center">
          <a href="https://drive.google.com/file/d/1x0DDHtKY1I-saZaNtQeFtjafMP_vKw-N/view?usp=drive_link" // Replace with your actual resume file path
              target="_blank" 
              download="Soumya_Resume.pdf" className="px-6 py-3 text-white font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 animate-pulse">
            HIRE ME
          </a>
        </div>
      )}

      <div className="absolute xs:bottom-0 bottom-28 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mt-10">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
