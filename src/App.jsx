import React from 'react';
import { Canvas } from '@react-three/fiber';
import Header from './Components/Header/Header';
import Cube from './Models/Cube/Cube';

function App() {
  return (
    <div>
      <Header />
      <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
    </div>
  );
}

export default App;
