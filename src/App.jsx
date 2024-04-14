import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./App.css"
import { Stats } from "@react-three/drei";

function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [10,10,10], fov: 50 }}>
        <color attach="background" args={["#1E1E1E"]} />
        <Experience />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;
