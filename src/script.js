import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";

// initialize pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();

//add background image for space
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new  THREE.CubeTextureLoader()
cubeTextureLoader.setPath('/textures/cubeMap/')

//planets textures
const sunTexture = textureLoader.load("/textures/2k_sun.jpg");
sunTexture.colorSpace = THREE.SRGBColorSpace  
const mercuryTexture = textureLoader.load("/textures/2k_mercury.jpg");
mercuryTexture.colorSpace = THREE.SRGBColorSpace
const venusTexture = textureLoader.load("/textures/2k_venus_surface.jpg");
venusTexture.colorSpace = THREE.SRGBColorSpace
const earthTexture = textureLoader.load("/textures/2k_earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace
const marsTexture = textureLoader.load("/textures/2k_mars.jpg");
marsTexture.colorSpace = THREE.SRGBColorSpace
const moonTexture = textureLoader.load("/textures/2k_moon.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace
const jupiterTexture = textureLoader.load("/textures/jupiter.jpg");
jupiterTexture.colorSpace = THREE.SRGBColorSpace
const saturnTexture = textureLoader.load("/textures/saturn.jpg");
saturnTexture.colorSpace = THREE.SRGBColorSpace 
const uranusTexture = textureLoader.load("/textures/uranus.jpg");
uranusTexture.colorSpace = THREE.SRGBColorSpace 
const neptuneTexture = textureLoader.load("/textures/neptune.jpg");
neptuneTexture.colorSpace = THREE.SRGBColorSpace
const saturnRingTexture = textureLoader.load("/textures/saturn_ring.jpg"); 
saturnRingTexture.colorSpace = THREE.SRGBColorSpace

const backgroundCubemap = cubeTextureLoader
.load( [
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png'
] );

scene.background = backgroundCubemap;

// const axisHelper = new THREE.AxesHelper(160);
// scene.add(axisHelper);

const moonOrbitSpeed = 0.01; // Adjust the speed as needed
const moonOrbitDistance = 5; // Distance from the Earth





const group1 = new THREE.Group();
const group2 = new THREE.Group();
const group3 = new THREE.Group();
const group4 = new THREE.Group();
const group5 = new THREE.Group();
const group6 = new THREE.Group();
const group7 = new THREE.Group();
const group8 = new THREE.Group();
const group9 = new THREE.Group();

const geometry = new THREE.SphereGeometry(2, 16, 32);

// creating SUN
const sunMaterial = new THREE.MeshBasicMaterial();
const sun = new THREE.Mesh(geometry, sunMaterial);
sun.position.set(0, 0, 0);
scene.add(sun);
sun.material.map = sunTexture;
sun.scale.set(10, 10, 10); // scale the sun to make it larger

// creating planets with different colors
const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 'gray', wireframe: false });
const mercury = new THREE.Mesh(geometry, mercuryMaterial);
mercury.position.set(39, 0, 0); // Mercury's average distance from the sun
mercury.material.map = mercuryTexture;
mercury.scale.set(0.38, 0.38, 0.38); // scale the mercury to make it smaller
const mercuryOrbit = new THREE.Mesh(new THREE.RingGeometry(39, 39.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
mercuryOrbit.rotation.x = Math.PI / 2;
mercuryOrbit.position.set(0, 0, 0);
scene.add(mercuryOrbit);

const venusMaterial = new THREE.MeshBasicMaterial();
const venus = new THREE.Mesh(geometry, venusMaterial);
venus.position.set(72, 0, 0); // Venus's average distance from the sun
venus.material.map = venusTexture;
venus.scale.set(0.95, 0.95, 0.95); // scale the venus to make it smaller
const venusOrbit = new THREE.Mesh(new THREE.RingGeometry(72, 72.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
venusOrbit.rotation.x = Math.PI / 2;  
venusOrbit.position.set(0, 0, 0);
scene.add(venusOrbit); 

const earthMaterial = new THREE.MeshBasicMaterial();
const earth = new THREE.Mesh(geometry, earthMaterial);
earth.position.set(100, 0, 0); // Earth's average distance from the sun
earth.material.map = earthTexture;
const earthOrbit = new THREE.Mesh(new THREE.RingGeometry(100, 100.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
earthOrbit.rotation.x = Math.PI / 2;
earthOrbit.position.set(0, 0, 0);
scene.add(earthOrbit);

const earthMoonMaterial = new THREE.MeshBasicMaterial();
const earthMoon = new THREE.Mesh(geometry, earthMoonMaterial);
earthMoon.position.set(105, 3, 0); // Moon's average distance from the Earth
earthMoon.material.map = moonTexture;
earthMoon.scale.set(0.27, 0.27, 0.27); // scale the moon to make it smaller

const marsMaterial = new THREE.MeshBasicMaterial();
const mars = new THREE.Mesh(geometry, marsMaterial);
mars.position.set(152, 0, 0); // Mars's average distance from the sun
mars.material.map = marsTexture;
mars.scale.set(0.53, 0.53, 0.53); // scale the mars to make it smaller
const marsOrbit = new THREE.Mesh(new THREE.RingGeometry(152, 152.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
marsOrbit.rotation.x = Math.PI / 2;
marsOrbit.position.set(0, 0, 0);
scene.add(marsOrbit);

const jupiterMaterial = new THREE.MeshBasicMaterial();
const jupiter = new THREE.Mesh(geometry, jupiterMaterial);
jupiter.position.set(520, 0, 0); // Jupiter's average distance from the sun
jupiter.material.map = jupiterTexture;
jupiter.scale.set(11.2, 11.2, 11.2); // scale the jupiter to make it larger
const jupiterOrbit = new THREE.Mesh(new THREE.RingGeometry(520, 520.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
jupiterOrbit.rotation.x = Math.PI / 2;
jupiterOrbit.position.set(0, 0, 0);
scene.add(jupiterOrbit);

const saturnMaterial = new THREE.MeshBasicMaterial();
const saturn = new THREE.Mesh(geometry, saturnMaterial);
saturn.position.set(958, 0, 0); // Saturn's average distance from the sun
saturn.material.map = saturnTexture;
saturn.scale.set(9.45, 9.45, 9.45); // scale the saturn to make it larger
const saturnOrbit = new THREE.Mesh(new THREE.RingGeometry(958, 958.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
saturnOrbit.rotation.x = Math.PI / 2;
saturnOrbit.position.set(0, 0, 0);
scene.add(saturnOrbit);

// adding saturn ring  
const saturnRingGeometry = new THREE.RingGeometry(9.45*5,9.45*9, 32);
const saturnRingMaterial = new THREE.MeshBasicMaterial({ map: saturnRingTexture, side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRing.rotation.x = Math.PI / 2;
saturnRing.position.set(958, 0, 0);
scene.add(saturnRing);

const uranusMaterial = new THREE.MeshBasicMaterial();
const uranus = new THREE.Mesh(geometry, uranusMaterial);
uranus.position.set(1922, 0, 0); // Uranus's average distance from the sun
uranus.material.map = uranusTexture;
uranus.scale.set(4, 4, 4); // scale the uranus to make it larger
const uranusOrbit = new THREE.Mesh(new THREE.RingGeometry(1922, 1922.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
uranusOrbit.rotation.x = Math.PI / 2;
uranusOrbit.position.set(0, 0, 0);
scene.add(uranusOrbit);

const neptuneMaterial = new THREE.MeshBasicMaterial();
const neptune = new THREE.Mesh(geometry, neptuneMaterial);
neptune.position.set(3005, 0, 0); // Neptune's average distance from the sun
neptune.material.map = neptuneTexture;
neptune.scale.set(3.88, 3.88, 3.88); // scale the neptune to make it larger
const neptuneOrbit = new THREE.Mesh(new THREE.RingGeometry(3005, 3005.1, 32), new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide }));
neptuneOrbit.rotation.x = Math.PI / 2;
neptuneOrbit.position.set(0, 0, 0);
scene.add(neptuneOrbit);


// adding planets to the Group
//scene.add(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune,earthMoon);
//all the planets are added to different groups
group1.add(sun,mercury)
group2.add(sun,venus)
group3.add(earth,earthMoon)
group4.add(sun,mars)
group5.add(sun,jupiter)
group6.add(sun,saturn,saturnRing)
group7.add(sun,uranus)
 group8.add(sun,neptune)
//adding moon to the earth group
//group9.add(earth.clone(), earthMoon)//,earthMoonOrbit)

//adding all the group to the scene
scene.add(group1,group2, group3, group4, group5,group6,group7, group8);//group9);

// Add event listener for mouse clicks
window.addEventListener('click', onMouseClick, false);

function onMouseClick(event) {
  // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycaster to detect objects
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // List of objects to check for intersection
  const objects = [sun, mercury, venus, earth, earthMoon, mars, jupiter, saturn, uranus, neptune];

  // Check for intersections
  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    // Get the first intersected object
    const intersectedObject = intersects[0].object;

    // Update the controls target to the intersected object's position
    controls.target.copy(intersectedObject.position);
  }
}

// Add a light source
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 1).normalize();
scene.add(light);
const light2 = new THREE.AmbientLight(0xffffff, 0.3); // Soft white light2
scene.add(light2);



// Initialize the camera
const camera = new THREE.PerspectiveCamera(
  75, // Adjusted FOV for a more immersive view
  window.innerWidth / window.innerHeight,
  0.1,
  50000
);
camera.position.set(0, 200, 1000); // Adjusted position for a better initial view

// Initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Add controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05; // Smooth out the controls
controls.maxDistance = 5000; // Allow zooming out to see the entire scene
controls.minDistance = 50; // Allow zooming in closer
controls.enablePan = true; // Allow panning
controls.autoRotate = true; // Enable auto-rotation for a dynamic view
controls.autoRotateSpeed = 0.5; // Adjust auto-rotation speed

// Add resize listener
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
const renderloop = () => {
  // Update the groups' rotation for animation
  
  group1.rotation.y += 0.01;
  group2.rotation.y += 0.008;
  group3.rotation.y += 0.007;
  group4.rotation.y += 0.006;
  group5.rotation.y += 0.005;
  group6.rotation.y += 0.004;
  group7.rotation.y += 0.003;
  group8.rotation.y += 0.002;
 

earthMoon.rotation.y += moonOrbitSpeed;
  earthMoon.position.x = Math.sin(earthMoon.rotation.y) * moonOrbitDistance;
  earthMoon.position.z = Math.cos(earthMoon.rotation.y) * moonOrbitDistance;






  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
