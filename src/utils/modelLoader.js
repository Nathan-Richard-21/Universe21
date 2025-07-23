import { useGLTF } from '@react-three/drei';

// Preload all models
export const preloadModels = () => {
  useGLTF.preload('models/african_masks.glb');
  useGLTF.preload('models/asset_-_african_mask (1).glb');
  useGLTF.preload('models/saafrican_mask (1).glb');
  useGLTF.preload('models/small_djembe.glb');
  useGLTF.preload('models/mp_40_submachine_gun.glb');
  useGLTF.preload('models/sci-fi_concept_gun.glb');
  useGLTF.preload('models/sci-fi_panels.glb');
  useGLTF.preload('models/scifi_drone.glb');
  useGLTF.preload('models/stylized_sci-fi_helmet.glb');
};

export default preloadModels;
