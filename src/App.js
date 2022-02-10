import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { useRef } from 'react';
import { 
  OrbitControls 
} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]} />
  )
}

const Box = props => {
  const ref = useRef();
  useFrame(state =>{
    ref.current.rotation.y += 0.01;
  })
  return(
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry/>
      <meshPhysicalMaterial color='blue' />
    </mesh>
  )
}

const Floor = props => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20,1,10]}/>
      <meshPhysicalMaterial/>
    </mesh>
  )
}

const Bulb = props => {
  return (
    <mesh {...props}>
      <pointLight castShadow/>
      <sphereBufferGeometry args={[0.2,20,10]}/>
      <meshPhongMaterial emissive='yellow'/>
    </mesh>
  )
}

function App() {
  
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas
        style={{background: 'black'}} 
        camera={{ position: [1,5,1] }}
      >
        <fog attach='fog' args={['white',1,10]}/>
        <ambientLight intensity={0.2}/>
        <Bulb position={[0,3,0]}/>
        <Orbit />
        <axesHelper args={[5]}/>
        <Box position={[0,1,0]}/>
        <Floor position={[0,-0.5,0]}/>
      </Canvas>
    </div>
  );
}

export default App;
