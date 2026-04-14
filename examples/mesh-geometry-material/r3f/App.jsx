import { Canvas } from '@react-three/fiber';

function HeroSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 16]} />
      <meshStandardMaterial color="#f97316" metalness={0.2} roughness={0.25} />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ height: '100vh', background: '#0f172a' }}>
      <Canvas camera={{ fov: 50, position: [0, 0.6, 4] }} dpr={[1, 2]}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[2, 3, 4]} intensity={1.6} />
        <HeroSphere />
      </Canvas>
    </div>
  );
}
