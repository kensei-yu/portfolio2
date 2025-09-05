import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newImage from '../100.png';
import CodeRain from '../components/CodeRain';
import NixieClockLoader from '../components/NixieClockLoader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CodeRain />
      <AnimatePresence>
        {isLoading && <NixieClockLoader onLoadComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <motion.div
          className="home-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <div className="main-info">
              <motion.h1 variants={itemVariants}>Kensei Yu</motion.h1>
              <motion.p variants={itemVariants}>Frontend Engineer</motion.p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Home;