import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

import { useSpring, a } from "@react-spring/three";

const SpinningMesh = ({
  position = [],
  speed = 1,
  factor = 0.6,
  args = [1, 1, 1],
  color = "",
}) => {
  const mesh = useRef(null);

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        speed={speed}
        factor={factor}
        attach="material"
        color={color}
      />
    </a.mesh>
  );
};

export default SpinningMesh;
