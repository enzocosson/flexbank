import React from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "../../Models/Cube/Cube";
import "./Home.scss";

function Home() {
  return (
    <div className="main">
      <img className="background" src="./images/background.jpg" alt="" />
      <h1>Welcome to FlexBank, your financial partner for life</h1>
      <h2>Easy, secure, and convenient banking solutions for all your needs</h2>
      <Canvas className="webgl">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube />{" "}
      </Canvas>
    </div>
  );
}

export default Home;
