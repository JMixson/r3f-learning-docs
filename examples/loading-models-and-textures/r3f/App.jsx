import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function TexturedBox() {
  const texture = useLoader(TextureLoader, 'https://threejs.org/examples/textures/uv_grid_opengl.jpg');

  return (
    <mesh>
      <boxGeometry args={[1.8, 1.8, 1.8]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ height: '100vh', background: '#0f172a' }}>
      <Canvas camera={{ fov: 50, position: [0, 0, 4] }} dpr={[1, 2]}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 3, 4]} intensity={1.5} />
        <TexturedBox />
      </Canvas>
    </div>
  );
}
