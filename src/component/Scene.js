import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import Rig from "./Rig";
import classes from "./Scene.module.css";

const Scene = () => {
  return (
    <div className={classes["canvas-container"]}>
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <group position={[0, -1, 0]}>
          <Suspense fallback={null}>
            <Model pose={4} position={[0, 0, 0]} />
            <Model pose={1} position={[1, 0, -1]} />
            <Model pose={2} position={[-1, 0, -1]} />
          </Suspense>
        </group>
        <mesh
          rotation={[-Math.PI/2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <Rig />
      </Canvas>
    </div>
  );
};

export default Scene;
