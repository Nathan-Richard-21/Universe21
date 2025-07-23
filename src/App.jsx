import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { 
  Ancestors,
  Contact, 
  Experience, 
  Footer,
  GameFeatures, 
  Hero, 
  Navbar, 
  Portfolio,
  Screenshots,
  StoreButtons,
  Technology
} from "./components";
import { preloadModels } from './utils/modelLoader';

const App = () => {
  const wrapperRef = useRef(null);
  
  // Preload all 3D models
  useEffect(() => {
    preloadModels();
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className="stars-bg fixed inset-0 z-0"></div>
        <Navbar />
        <StoreButtons />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px] py-10'>
            <Portfolio />
          </div>
          <div id="features" className='relative z-30 bg-primary py-10'>
            <GameFeatures />
          </div>
          <div id="experience" className='relative z-30 bg-primary py-10'>
            <Experience />
          </div>
          <div id="ancestors" className='relative z-30 bg-primary py-10'>
            <Ancestors />
          </div>
          <div id="technology" className='relative z-30 bg-primary py-10'>
            <Technology />
          </div>
          <div id="screenshots" className='relative z-30 bg-primary py-10'>
            <Screenshots />
          </div>
          <div id="contact" className='relative z-30 bg-primary py-10 flex justify-center'>
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
