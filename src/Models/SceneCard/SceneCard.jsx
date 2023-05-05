import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import "./SceneCard.module.scss";


export function SceneCard(props) {
  const groupRef = useRef();

  const { nodes, materials } = useGLTF("./models/card.gltf");

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5; // Fait tourner le groupe autour de l'axe Y
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
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
