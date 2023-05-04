import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

function Cube(props) {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'#f3f3f3'} />
    </mesh>
  )
}

export default Cube
