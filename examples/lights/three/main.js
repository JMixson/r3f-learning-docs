import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#111827');

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight('#ffffff', 0.25);
const keyLight = new THREE.DirectionalLight('#ffffff', 1.4);
keyLight.position.set(2, 3, 4);

const fillLight = new THREE.PointLight('#60a5fa', 18, 12);
fillLight.position.set(-3, 1, 2);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({ color: '#e5e7eb', roughness: 0.35 })
);

scene.add(ambientLight, keyLight, fillLight, sphere);

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize);
renderer.render(scene, camera);
