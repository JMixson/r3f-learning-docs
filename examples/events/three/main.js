import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#111827');

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.5, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const materialA = new THREE.MeshStandardMaterial({ color: '#f97316' });
const materialB = new THREE.MeshStandardMaterial({ color: '#38bdf8' });

const leftBox = new THREE.Mesh(new THREE.BoxGeometry(), materialA);
leftBox.position.x = -1.1;

const rightBox = new THREE.Mesh(new THREE.BoxGeometry(), materialB);
rightBox.position.x = 1.1;

const light = new THREE.DirectionalLight('#ffffff', 1.6);
light.position.set(2, 3, 4);

scene.add(light, leftBox, rightBox);

window.addEventListener('pointerdown', (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const [hit] = raycaster.intersectObjects([leftBox, rightBox]);

  if (hit?.object) {
    const mesh = hit.object;
    const isExpanded = mesh.scale.x > 1;
    mesh.scale.setScalar(isExpanded ? 1 : 1.35);
  }

  renderer.render(scene, camera);
});

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

window.addEventListener('resize', onResize);
renderer.render(scene, camera);
