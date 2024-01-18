import React, { useState, useEffect } from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { ColorModeContext } from './theme';

import './App.css';
import './App.scss';
import { ParticlesAnimation } from './wrapper';
import DotLoader from 'react-spinners/DotLoader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <DotLoader color="var(--tertiary-color)" />
        </div>
      ) : (
        <div>
          <ParticlesAnimation />
          <div
            className="app"
            id="theme-root"
            data-theme={isDarkMode ? 'light' : 'dark'}
          >
            <ColorModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
              <Navbar />
              <Header />
              <About />
              <Work />
              <Skills />
              <Testimonial />
              <Footer />
            </ColorModeContext.Provider>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
