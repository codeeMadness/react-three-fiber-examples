import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Cube from "./Cube";
import Plane from "./Plane";
import classes from "./Scene.module.css";

const Scene = () => {
  const [ready, set] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={classes["canvas-container"]}>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
        <ambientLight />
        <spotLight
          angle={0.25}
          penumbra={0.5}
          position={[10, 10, 5]}
          castShadow
        />
        <Physics>
          <Plane />
          <Cube position={[0, 5, 0]} />
          <Cube position={[0.45, 7, -0.25]} />
          <Cube position={[-0.45, 9, 0.25]} />
          {ready && <Cube position={[-0.45, 10, 0.25]} />}
        </Physics>
      </Canvas>
    </div>
  );
};

export default Scene;
