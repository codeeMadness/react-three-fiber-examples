import { usePlane } from "@react-three/cannon";

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI/2, 0, 0], ...props }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  );
};

export default Plane;
