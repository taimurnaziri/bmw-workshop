import { extend, useThree } from 'react-three-fiber';

const Floor = props => {
    return (
      <mesh {...props} receiveShadow>
        <boxBufferGeometry args={[20,1,10]}/>
        <meshPhysicalMaterial/>
      </mesh>
    )
  }

  export default Floor;