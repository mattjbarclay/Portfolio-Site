import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            {/* Add more routes as we create them */}
            <Route path="/about" element={<div>About Page Coming Soon</div>} />
            <Route path="/projects" element={<div>Projects Page Coming Soon</div>} />
            <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
