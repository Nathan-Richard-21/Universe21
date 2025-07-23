import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gameFeatures } from '../data';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Model = ({ modelPath, scale = [5.5, 5.5, 5.5], position = [0, -1, 0], rotation = [0, 0, 0] }) => {
  const gltf = useGLTF(modelPath);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={gltf.scene} 
      scale={scale} 
      position={position} 
      rotation={rotation} 
    />
  );
};

const FeatureCard = ({ index, title, description, icon, modelScale, modelPosition, modelRotation }) => {
  const [hovered, setHovered] = useState(false);
  
  // Use special model for storyline feature
  const modelPath = title === "Captivating Storyline" ? "models/small_djembe.glb" : icon;
  
  return (
    <motion.div 
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className={`w-full md:w-[350px] green-pink-gradient p-[1px] rounded-[20px] shadow-card ${hovered ? 'scale-105' : 'scale-100'} transition-all duration-300`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[350px] flex justify-evenly items-center flex-col">
        <div className="w-full h-[180px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
            <Model 
              modelPath={modelPath}
              scale={modelScale}
              position={modelPosition}
              rotation={modelRotation}
            />
          </Canvas>
        </div>

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        <p className="mt-2 text-secondary text-[14px] text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const GameFeatures = () => {
  return (
    <motion.div variants={staggerContainer()}>
      <motion.div variants={textVariant()} className="mt-4">
        <h2 className={styles.sectionText}>Game Features</h2>
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center mt-4">
          Immerse yourself in a post-apocalyptic world filled with danger, mystery, and innovation.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {gameFeatures.map((feature, index) => (
          <FeatureCard key={`feature-${index}`} index={index} {...feature} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(GameFeatures, "features");
