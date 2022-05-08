import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const SpinningMesh = () => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default SpinningMesh;
