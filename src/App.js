import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Portfolio from './components/project/Project';
import Contact from './components/contact/Contact';
import Notation from './components/notation/Notation';


const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
        <Notation />
      </main>
    </>
  );
};

export default App;
