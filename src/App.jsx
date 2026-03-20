import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import useKonamiCode from './hooks/useKonamiCode';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  useKonamiCode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen bg-background text-white selection:bg-primary/30 selection:text-primary`}>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          
          {/* Animated Background Mesh */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-gradient-mesh" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-gradient-mesh" style={{ animationDelay: '-5s' }} />
            <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-primary/10 blur-[100px] rounded-full animate-gradient-mesh" style={{ animationDelay: '-10s' }} />
          </div>

          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          
          <main className="container mx-auto px-4 md:px-8 space-y-24 pb-20">
            <Hero />
            <Skills />
            <Education />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
