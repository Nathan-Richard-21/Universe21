import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { gameScreenshots } from '../data';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ScreenshotCard = ({ screenshot, index, onClick }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
      className="relative group w-full sm:w-[48%] lg:w-[30%] p-1 cursor-pointer"
      onClick={() => onClick(screenshot)}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={screenshot.image} 
          alt={screenshot.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-end transition-opacity duration-300">
          <div className="p-4">
            <h4 className="text-white font-bold text-xl">{screenshot.title}</h4>
            <p className="text-white text-sm mt-2">{screenshot.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Screenshots = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenLightbox = (screenshot) => {
    setSelectedImage(screenshot);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <motion.div variants={textVariant()} className="mt-12">
        <h2 className={styles.sectionText}>Screenshots</h2>
        <p className="text-secondary text-lg md:text-xl mt-4 max-w-3xl mx-auto text-center">
          Get a glimpse of the haunting beauty and intense action that awaits in The Search
        </p>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {gameScreenshots.map((screenshot, index) => (
          <ScreenshotCard
            key={`screenshot-${index}`}
            screenshot={screenshot}
            index={index}
            onClick={handleOpenLightbox}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleCloseLightbox}
        >
          <div className="relative max-w-5xl w-full p-4">
            <button
              onClick={handleCloseLightbox}
              className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold"
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <div className="text-white mt-4">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Screenshots, "screenshots");
