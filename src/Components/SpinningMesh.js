import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const SpinningMesh = ({ position = [], speed= 1, factor = 0.6 ,args = [1, 1, 1], color='' }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial speed={speed} factor={factor} attach="material" color={color} />
    </mesh>
  );
};

export default SpinningMesh;
