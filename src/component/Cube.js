import { useBox } from "@react-three/cannon";

const Cube = (props) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  return (
    <mesh castShadow ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Cube;
