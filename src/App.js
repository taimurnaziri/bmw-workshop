import './App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Suspense } from 'react';
import Orbit from './components/Orbit';
import Box from './components/Box';
import Background from './components/Background';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import Draggable from './components/Draggable';
import ColorPicker from './components/ColorPicker';
import Model from './components/Model';
import BoundingBox from './components/BoundingBox';


function App() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <ColorPicker/>
      <Canvas
        shadowMap
        style={{background: 'black'}} 
        camera={{ position: [7,7,7] }}
      >
        <ambientLight intensity={0.2}/>
        <Orbit />
        <axesHelper args={[5]}/>
        <Physics>
        <Suspense fallback={null}>
        <Bulb position={[0,3,0]}/>
          <Draggable transformGroup>
            <BoundingBox 
              visible 
              position={[4,4,0]}
              dims={[3,2,6]}
              offset={[0,-0.4,0.8]}
            >
              <Model 
                path='/tesla_model_3/scene.gltf'
                scale={new Array(3).fill(0.01)}
              />
            </BoundingBox>
          </Draggable>
          <Draggable transformGroup>
            <BoundingBox 
              visible 
              position={[-4,4,0]}
              dims={[3,2,7]}
              offset={[0,-0.8,0.2]}
            >
              <Model 
                path='/tesla_model_s/scene.gltf'
                scale={new Array(3).fill(.8)}
                position={[-4,0.3,0]}
              />
            </BoundingBox>
          </Draggable>
          </Suspense>
          <Suspense fallback={null}>
            <Background/>
          </Suspense>
          <Floor position={[0,-0.5,0]}/>
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;