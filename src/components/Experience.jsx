import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import ModelCanvas from "./ModelCanvas";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center rounded-lg 
      ${isActive 
        ? 'bg-tertiary bg-opacity-30 shadow-lg shadow-tertiary' 
        : 'bg-transparent hover:bg-tertiary hover:bg-opacity-10'
      } transition-all duration-300`}
    >
      {isActive && (
        <motion.div 
          layoutId="activeTab"
          className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary my-6"
          initial={{ height: 0 }}
          animate={{ height: '80%' }}
          exit={{ height: 0 }}
        />
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive ? "text-quaternary" : "text-slate-400"
        } transition-colors duration-300`}
      >
        {experience.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-xl sm:font-medium pt-2 sm:pl-8 ${
          isActive ? "text-white" : "text-slate-500"
        } transition-colors duration-300`}
      >
        {experience.company_name} | {experience.date}
      </p>
    </motion.div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-5"
    >
      <div className="max-w-7xl space-y-8 border-2 border-tertiary bg-tertiary bg-opacity-10 rounded-xl lg:rounded-3xl p-6 backdrop-blur-sm shadow-xl">
        {experience.details.map((detail, index) => (
          <motion.div
            key={`experience-detail-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <p 
              className="text-slate-300 font-semibold text-[14px] xs:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);
  const modelRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  };

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          The Game
        </h2>
        <p className="text-secondary text-lg md:text-xl mt-4 max-w-3xl mx-auto text-center">
          Experience the apocalypse like never before in The Search - launching October 21, 2025
        </p>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-10 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-2/5">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex-1 z-10 sm:block hidden">
          <ExperienceDetails experience={selectedJob} />
        </div>
      </div>
      
      <div className="h-72 w-full mt-10">
        <ModelCanvas modelPath="/models/sci-fi_concept_gun.glb" />
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
