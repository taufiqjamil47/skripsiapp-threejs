import * as THREE from "three";
import { gsap } from "gsap";

let SCENE = new THREE.Scene();
let CAMERA = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.001,
  1000
);
let RENDERER = new THREE.WebGLRenderer();
const windowHalf = new THREE.Vector2(
  window.innerWidth / 2,
  window.innerHeight / 2
);
var lamp = document.getElementById("lamp");
var astaga = document.getElementById("astaga");
var halal = document.getElementById("halal");

function main() {
  CAMERA.position.set(5, 5, 5);
  RENDERER.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(RENDERER.domElement);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  RENDERER.render(SCENE, CAMERA);
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  windowHalf.set(width / 2, height / 2);

  CAMERA.aspect = width / height;
  CAMERA.updateProjectionMatrix();
  RENDERER.setSize(width, height);
});

lamp.onclick = () => {
  gsap.to();
};
