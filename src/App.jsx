// src/App.jsx or main component file
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';
import Socials from './components/Socials';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
};

export default App;
