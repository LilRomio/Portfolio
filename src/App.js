import React, { useState } from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { ColorModeContext } from './theme';

import './App.css';
import './App.scss';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div className="app" id="theme-root" data-theme={isDarkMode ? 'dark' : 'light'}>
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
  );
}

export default App;
