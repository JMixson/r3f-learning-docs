import * as THREE from 'three';

function createCheckerTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;

  const context = canvas.getContext('2d');

  if (!context) {
    return new THREE.CanvasTexture(canvas);
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

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const scene = new THREE.Scene();
scene.background = new THREE.Color('#0f172a');

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight('#ffffff', 0.4));

const light = new THREE.DirectionalLight('#ffffff', 1.5);
light.position.set(2, 3, 4);
scene.add(light);

const texture = createCheckerTexture();
const material = new THREE.MeshStandardMaterial({ map: texture });
const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 1.8), material);
scene.add(mesh);
renderer.render(scene, camera);

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

window.addEventListener('resize', onResize);
