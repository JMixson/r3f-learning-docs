import * as THREE from 'three';

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

const loader = new THREE.TextureLoader();
loader.load('https://threejs.org/examples/textures/uv_grid_opengl.jpg', (texture) => {
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 1.8), material);
  scene.add(mesh);
  renderer.render(scene, camera);
});

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

window.addEventListener('resize', onResize);
