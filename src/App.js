import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Box from "./Components/Box";

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10] }}>
        <ambientLight intensity={0.4} />
        <Box />
      </Canvas>
    </>
  );
}

export default App;
