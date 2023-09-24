import { CodeJar } from "codejar";
// import Prism from "prismjs";

const editor = document.querySelector("#html-");
// const jar = CodeJar(editor, Prism.highlightElement, { tab: "\t" });

// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import WebGL from "three/addons/capabilities/WebGL.js";

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const camera = new THREE.PerspectiveCamera(
//   45,
//   window.innerWidth / window.innerHeight,
//   1,
//   500
// );
// camera.position.set(5, 5, 15);
// camera.lookAt(0, 0, 0);

// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff);

// const controls = new OrbitControls(camera, renderer.domElement);

// let cube;
// {
//   const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
//   const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//   scene.add(cube);
// }

// {
//   const points = [];
//   points.push(new THREE.Vector3(-10, 0, 0));
//   points.push(new THREE.Vector3(0, 10, 0));
//   points.push(new THREE.Vector3(10, 0, 0));
//   const geometry = new THREE.BufferGeometry().setFromPoints(points);
//   const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
//   const line = new THREE.Line(geometry, material);
//   scene.add(line);
// }

// {
//   const axesHelper = new THREE.AxesHelper(5);
//   scene.add(axesHelper);
// }

// {
//   const size = 10;
//   const divisions = 10;

//   const gridHelper = new THREE.GridHelper(size, divisions);
//   scene.add(gridHelper);
// }

// {
//   const dir = new THREE.Vector3(1, 2, 0);

//   //normalize the direction vector (convert to vector of length 1)
//   dir.normalize();

//   const origin = new THREE.Vector3(0, 0, 0);
//   const length = 4;
//   const hex = 0xffff00;

//   const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
//   scene.add(arrowHelper);
// }

// {
//   const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3);
//   const helper = new THREE.PlaneHelper(plane, 1, 0xffff00);
//   scene.add(helper);
// }

// // TODO:
// // - ground plane
// // - vertical grids
// // - shadows
// // - text labels
// // - object trails

// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// if (WebGL.isWebGLAvailable()) {
//   animate();
// } else {
//   const warning = WebGL.getWebGLErrorMessage();
//   document.getElementById("container").appendChild(warning);
// }
