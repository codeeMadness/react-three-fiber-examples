import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import classes from "./Scene.module.css";

const Scene = () => {
  return (
    <div className={classes['canvas-container']}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Scene;
