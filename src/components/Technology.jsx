import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';

const TechItem = ({ title, description, icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } },
        hidden: { opacity: 0, y: 50 }
      }}
      className="flex flex-col items-center p-6 rounded-2xl bg-tertiary bg-opacity-30 backdrop-blur-sm border border-quaternary border-opacity-30"
    >
      <div className="w-16 h-16 mb-5 text-quaternary flex items-center justify-center text-4xl">
        {icon}
      </div>
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary text-center">{description}</p>
    </motion.div>
  );
};

const Technology = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.3, 1)}>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>Powered by Unreal Engine 5.2</h2>
        <p className="text-secondary text-lg md:text-xl mt-4 max-w-3xl mx-auto text-center">
          Experience next-generation gaming with cutting-edge technology
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <TechItem 
          index={0}
          icon="🎮"
          title="Nanite" 
          description="Explore incredibly detailed environments with millions of polygons, all rendered in real-time with no compromise on quality."
        />
        <TechItem 
          index={1}
          icon="💡"
          title="Lumen" 
          description="Experience dynamic global illumination that reacts to scene changes, creating stunningly realistic lighting throughout your journey."
        />
        <TechItem 
          index={2}
          icon="🎭"
          title="MetaHuman Creator" 
          description="Encounter lifelike characters with unprecedented realism, making every interaction in The Search emotionally engaging."
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl glow-border">
          <div className="bg-tertiary bg-opacity-40 aspect-video flex items-center justify-center">
            <h3 className="text-quaternary text-2xl md:text-3xl font-orbitron">
              UNREAL ENGINE 5.2
            </h3>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <p className="text-white text-center text-lg font-bold">
              THE SEARCH - Developed with Unreal Engine 5.2
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Technology, "technology");
