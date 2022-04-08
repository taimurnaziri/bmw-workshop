import { useThree } from 'react-three-fiber';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';

const Background = props => {
    const appearance = useLoader(
      THREE.TextureLoader,
      '/autoshop.jpg'
    );
  
    const { gl } = useThree();
  
    const formatted = new THREE.WebGLCubeRenderTarget(
      appearance.image.height
    ).fromEquirectangularTexture(gl, appearance)
  
    return (
      <primitive 
        attach='background' 
        object={appearance}
      />
    )
  }

  export default Background;