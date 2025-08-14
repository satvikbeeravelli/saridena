import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';
// Use public folder path for logo
const logo = `${import.meta.env.BASE_URL}photos/saridena_logo.png`;

const Loader: React.FC = () => {
  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-logo-center">
        <motion.img
          src={logo}
          alt="Logo"
          className="high-quality-image"
          layoutId="main-logo"
          initial={{ scale: 3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
          loading="eager"
        />
      </div>
      
    </motion.div>
  );
};

export default Loader;