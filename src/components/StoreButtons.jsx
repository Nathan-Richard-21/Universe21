import React from 'react';
import { motion } from 'framer-motion';
import { storeLinks } from '../data';
import { fadeIn } from '../utils/motion';

const StoreButton = ({ name, url, icon, index }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`store-button ${icon === 'steam' ? 'bg-[#171a21]' : 'bg-[#0c1A2C]'} px-6 py-4 rounded-lg flex items-center gap-3 hover:shadow-lg transition-all duration-300`}
    >
      {icon === 'steam' ? (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M11.979 0C5.678 0 0.511 4.86 0.022 11.037l6.432 2.658c0.545-0.371 1.203-0.59 1.912-0.59 0.063 0 0.125 0.004 0.188 0.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-0.105l-4.076 2.911c0 0.052 0.004 0.105 0.004 0.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L0.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-0.61c0.262 0.543 0.714 0.999 1.314 1.25 1.297 0.539 2.793-0.076 3.332-1.375 0.263-0.63 0.264-1.319 0.005-1.949s-0.75-1.121-1.377-1.383c-0.624-0.26-1.29-0.249-1.878-0.03l1.523 0.63c0.956 0.4 1.409 1.5 1.009 2.455-0.397 0.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-0.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
        </svg>
      ) : (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12.0833 0.333374L1.08325 6.00004V12.8334L6.6201 15.76L4.80439 18.9375L7.99992 20.75L9.80481 17.5938L12 18.6667V23.6667H16V18.6667L23.9166 14.4167V7.58337L12.0833 0.333374ZM12.0833 2.81254L20.74 7.89587L16.9062 10.0834L8.24992 5.00004L12.0833 2.81254ZM7.33325 6.33337L15.9896 11.4167L12.0833 13.6354L3.42701 8.55212L7.33325 6.33337ZM3.08325 10.5L12 15.75V17.15L3.08325 11.9V10.5ZM21.9166 12.75L16 16V14.6L21.9166 11.35V12.75Z"/>
        </svg>
      )}
      <div className="text-white">
        <div className="text-xs opacity-80">Available on</div>
        <div className="font-bold text-lg">{name}</div>
      </div>
    </motion.a>
  );
};

const StoreButtons = () => {
  return (
    <div className="fixed bottom-10 right-10 z-40 flex flex-col sm:flex-row gap-4">
      {storeLinks.map((store, index) => (
        <StoreButton
          key={`store-${index}`}
          index={index}
          {...store}
        />
      ))}
    </div>
  );
};

export default StoreButtons;
