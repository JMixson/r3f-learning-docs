import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { CanvasTexture } from 'three';

function createCheckerTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;

  const context = canvas.getContext('2d');

  if (!context) {
    return new CanvasTexture(canvas);
  }

  context.fillStyle = '#0f172a';
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      context.fillStyle = (x + y) % 2 === 0 ? '#38bdf8' : '#f8fafc';
      context.fillRect(x * 16, y * 16, 16, 16);
    }
  }

  context.strokeStyle = '#f97316';
  context.lineWidth = 6;
  context.strokeRect(3, 3, canvas.width - 6, canvas.height - 6);

  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function TexturedBox() {
  const [texture] = useState(() => createCheckerTexture());

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
