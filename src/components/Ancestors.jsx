import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import CanvasLoader from './Loader';

// Model component that handles the 3D model
const Model = ({ modelPath, scale = [2, 2, 2], position = [0, -1, 0], rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(modelPath);
  
  useFrame(() => {
    // Optional: Add animation if needed
  });
  
  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position} 
      rotation={rotation}
    />
  );
};

const AncestorModel = ({ modelPath, title, description, scale, position, rotation }) => {
  // Preload the model
  useGLTF.preload(modelPath);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <div className="h-64 w-64 md:h-80 md:w-80 mb-6">
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={0.5} 
            castShadow
          />
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls 
              enableZoom={false} 
              autoRotate={true} 
              autoRotateSpeed={4}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
            <Model 
              modelPath={modelPath} 
              scale={scale} 
              position={position} 
              rotation={rotation} 
            />
          </Suspense>
        </Canvas>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-bold mt-4">{title}</h3>
      <p className="text-secondary text-sm md:text-base text-center max-w-xs mt-2">{description}</p>
    </motion.div>
  );
};

const Ancestors = () => {
  return (
    <div className="relative z-0">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>The Ancestors</h2>
        <p className="text-secondary text-lg md:text-xl mt-4 max-w-3xl mx-auto text-center">
          In The Search, ancient artifacts and ancestral masks hold mysterious powers that may be the key to humanity's salvation
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col md:flex-row gap-10 justify-center items-center md:items-start">
        <AncestorModel 
          modelPath="models/african_masks.glb" 
          title="Guardian Mask" 
          description="An ancient artifact said to protect its wearer from dark forces. In the game, finding this mask grants special defensive abilities."
          scale={[0.5, 0.5, 0.3]}
          position={[0, -3, -0.5]}
          rotation={[0, 0, 0]}
        />
        <AncestorModel 
          modelPath="models/saafrican_mask (1).glb" 
          title="Seer's Vision" 
          description="This ancestral mask reveals hidden pathways and secrets. Players who discover it gain enhanced perception and can detect hidden enemies."
          scale={[2.2, 2.2, 2.2]}
          position={[0, -0.8, 0]}
          rotation={[0, Math.PI / 6, 0]}
        />
        <AncestorModel 
          modelPath="models/asset_-_african_mask (1).glb" 
          title="Spirit Caller" 
          description="The most powerful of the ancestral relics, this mask allows communication with the spirits of the past, unlocking the game's deepest mysteries."
          scale={[0.05, 0.05, 0.05]}
          position={[0, -2.5, 0]}
          rotation={[0, -Math.PI / 6, 0]}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Ancestors, "ancestors");
