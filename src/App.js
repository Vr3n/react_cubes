import "./App.scss";
import { Canvas } from "@react-three/fiber";
import SpinningMesh from "./Components/SpinningMesh";

import { OrbitControls, softShadows } from "@react-three/drei";


softShadows();

function App() {
  return (
    <>
      <Canvas
        colorManagement
        shadows
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        {/**/}
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadows={1024}
          shadowCameraFar={50}
          shadowCameraLeft={-10}
          shadowCameraTop={10}
          shadowCameraBottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <SpinningMesh
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightBlue"
          />
          <SpinningMesh
            speed={6}
            factor={1}
            position={[-2, 1, -5]}
            color="yellow"
          />
          <SpinningMesh
            speed={6}
            factor={1}
            position={[5, 1, -2]}
            color="pink"
          />
        </group>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
