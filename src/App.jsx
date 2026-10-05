import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-[#ff2a2a] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      <Internships />
      <Education />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
