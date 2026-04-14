import { useState } from 'react';
import { Canvas } from '@react-three/fiber';

function ClickableBox({ color, position }) {
  const [active, setActive] = useState(false);

  return (
    <mesh position={position} scale={active ? 1.35 : 1} onClick={() => setActive((value) => !value)}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ height: '100vh', background: '#111827' }}>
      <Canvas camera={{ fov: 55, position: [0, 0.5, 5] }} dpr={[1, 2]}>
        <color attach="background" args={['#111827']} />
        <directionalLight position={[2, 3, 4]} intensity={1.6} />
        <ClickableBox color="#f97316" position={[-1.1, 0, 0]} />
        <ClickableBox color="#38bdf8" position={[1.1, 0, 0]} />
      </Canvas>
    </div>
  );
}
