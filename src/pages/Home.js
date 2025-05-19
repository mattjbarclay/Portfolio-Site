import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

function Pond() {
  return (
    <div className="pond">
      <div className="pond-surface"></div>
      <div className="ripple ripple-1"></div>
      <div className="ripple ripple-2"></div>
      <div className="ripple ripple-3"></div>
      <div className="ripple ripple-4"></div>
    </div>
  );
}

function Home() {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '700px' }}
    >
      <div className="gradient-bg"></div>
      <Pond />
      <div className="hero-content">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Matthew Barclay
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Software Developer
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building modern web applications with passion and precision
        </motion.p>
        <motion.div 
          className="cta-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/projects" className="cta-button primary">
            View My Work
          </Link>
          <Link to="/contact" className="cta-button secondary">
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home; 