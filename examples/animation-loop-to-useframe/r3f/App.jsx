import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningCube() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.015;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ height: '100vh', background: '#0b1120' }}>
      <Canvas camera={{ fov: 60, position: [0, 0, 4] }} dpr={[1, 2]}>
        <color attach="background" args={['#0b1120']} />
        <directionalLight position={[2, 3, 4]} intensity={1.4} />
        <SpinningCube />
      </Canvas>
    </div>
  );
}
