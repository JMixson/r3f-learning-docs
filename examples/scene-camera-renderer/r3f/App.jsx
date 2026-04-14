import { Canvas } from '@react-three/fiber';

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ height: '100vh', background: '#10131a' }}>
      <Canvas camera={{ fov: 60, position: [0, 1.4, 4] }} dpr={[1, 2]}>
        <color attach="background" args={['#10131a']} />
        <Cube />
      </Canvas>
    </div>
  );
}
