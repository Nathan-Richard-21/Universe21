import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';

// Component for loading 3D models
const ModelCanvas = ({ 
  modelPath, 
  scale = [6, 6, 6],
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Add to cache to prevent reloading
    useGLTF.preload(modelPath);
    
    // Check for mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [modelPath]);
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab active:cursor-grabbing"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} color="#ff0000" />
      <pointLight position={[10, 0, 20]} intensity={0.5} color="#0077ff" />
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <Model 
          modelPath={modelPath} 
          isMobile={isMobile}
          customScale={scale}
          customPosition={position}
          customRotation={rotation}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Model component
const Model = ({ modelPath, isMobile, customScale = [1, 1, 1], customPosition = [0, -1, 0], customRotation = [0, 0, 0] }) => {
  try {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();
    
    useEffect(() => {
      if (modelRef.current) {
        // Apply custom rotation
        modelRef.current.rotation.x = customRotation[0];
        modelRef.current.rotation.y = customRotation[1];
        modelRef.current.rotation.z = customRotation[2];
        
        // Apply custom position, adjusting for mobile if needed
        modelRef.current.position.x = customPosition[0];
        modelRef.current.position.y = isMobile ? customPosition[1] - 1 : customPosition[1];
        modelRef.current.position.z = customPosition[2];
        
        // Apply custom scale, adjusting for mobile if needed
        const mobileScaleFactor = isMobile ? 0.5 : 1;
        modelRef.current.scale.set(
          customScale[0] * mobileScaleFactor,
          customScale[1] * mobileScaleFactor,
          customScale[2] * mobileScaleFactor
        );
      }
    }, [isMobile, customPosition, customRotation, customScale]);
    
    return (
      <mesh ref={modelRef}>
        <primitive 
          object={scene} 
        />
      </mesh>
    );
  } catch (error) {
    console.error(`Error loading model: ${modelPath}`, error);
    return null;
  }
};

export default ModelCanvas;
