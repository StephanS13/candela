import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/home';
// import Films from './pages/films';
import Works from './pages/works';
import About from './pages/about';
// import Photos from './pages/photos';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
