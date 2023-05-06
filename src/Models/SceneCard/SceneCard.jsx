import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "./SceneCard.module.scss";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function SceneCard(props) {
  const { nodes, materials } = useGLTF("./models/card.gltf");
  const ref = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    // Card movement and rotation
    tl.current.to(ref.current.position, {
      duration: 0.5,
      x: 13,
      y: 0,
      z: 7,
      onUpdate: () => {
        ref.current.rotation.y += 0.05;
      },
    });

    // Card rotation --------------------------------
    tl.current.to(
      ref.current.rotation,
      {
        duration: 0.5,
        x: -1.57,
        y: 4.71,
        z: 0,

        onUpdate: () => {
          ref.current.rotation.y -= 0.05;
        },
      },
      0
    );

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollTop / (documentHeight - windowHeight);
      tl.current.seek(progress * tl.current.duration());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Card__0.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/card.gltf");

export default SceneCard;
