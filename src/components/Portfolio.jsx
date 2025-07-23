import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ModelCanvas from "./ModelCanvas";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn(isEven ? "right" : "left", "spring", index * 0.2, 0.75)}
      className={`w-full mt-10 mb-20 flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
    >
      <div className='relative w-full md:w-3/5 overflow-hidden rounded-2xl group'>
        <motion.img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-8 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight'
        >
          {name}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='mt-4 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed'
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [modelIndex, setModelIndex] = useState(0);
  const models = [
    { 
      path: 'models/stylized_sci-fi_helmet.glb',
      scale: [4, 4, 4],
      position: [0, -0.5, 0],
      rotation: [0, 0.5, 0]
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setModelIndex((prev) => (prev + 1) % models.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [models.length]);
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>About Universe 21</h2>
        <p className="text-secondary text-lg md:text-xl mt-4 max-w-3xl mx-auto text-center">
          Pushing the boundaries of interactive entertainment since 2020
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
     
    </>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
