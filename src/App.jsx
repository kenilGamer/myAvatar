import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function App() {
  return (
    <Canvas camera={{
      position: [3,3,3],
    }}>
      <color attach="background" args={["#333333"]} />
      <OrbitControls/>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial/>
      </mesh>
    </Canvas>
  )
}

export default App