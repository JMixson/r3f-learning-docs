import { Canvas } from '@react-three/fiber';

function LitSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#e5e7eb" roughness={0.35} />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ height: '100vh', background: '#111827' }}>
      <Canvas camera={{ fov: 50, position: [0, 1.2, 5] }} dpr={[1, 2]}>
        <color attach="background" args={['#111827']} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[2, 3, 4]} intensity={1.4} />
        <pointLight position={[-3, 1, 2]} intensity={18} distance={12} color="#60a5fa" />
        <LitSphere />
      </Canvas>
    </div>
  );
}
