import "./App.scss";
import { Canvas } from "@react-three/fiber";
import SpinningMesh from "./Components/SpinningMesh";

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10] }}>
        <ambientLight intensity={0.4} />
        <SpinningMesh />
      </Canvas>
    </>
  );
}

export default App;
