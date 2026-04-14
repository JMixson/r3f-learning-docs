import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#0f172a');

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.6, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight('#ffffff', 0.35);
const directionalLight = new THREE.DirectionalLight('#ffffff', 1.6);
directionalLight.position.set(2, 3, 4);

const geometry = new THREE.SphereGeometry(1, 32, 16);
const material = new THREE.MeshStandardMaterial({
  color: '#f97316',
  metalness: 0.2,
  roughness: 0.25,
});
const sphere = new THREE.Mesh(geometry, material);

scene.add(ambientLight, directionalLight, sphere);

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);
renderer.render(scene, camera);
