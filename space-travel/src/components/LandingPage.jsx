import React, { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import moonTexture from "../assets/img/moon-texture.jpg";
import moonMap from "../assets/img/moon-map.jpg";
import background from "../assets/img/stars.png";
import astronaut from "../assets/img/astronaut.png";

const LandingPage = () => {
  useEffect(() => {
    // Crete new scene
    const scene = new THREE.Scene();

    // Create Sphere
    const geometry = new THREE.SphereGeometry(3, 64, 64);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(moonTexture);
    const displacementMap = textureLoader.load(moonMap);

    // Add material
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: texture,
      displacementMap: displacementMap,
      displacementScale: 0.05,
      bumpMap: displacementMap,
      bumpScale: 0.04,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Sizer
    let w;
    if (window.innerWidth < 800) {
      w = window.innerWidth;
    } else {
      w = window.innerWidth / 2;
    }

    let h = window.innerHeight;

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(100, 10, 5);
    scene.add(light);

    // Camera
    const camera = new THREE.PerspectiveCamera(25, w / h);
    camera.position.z = 20;
    scene.add(camera);

    // Renderer
    const canvas = document.querySelector("#webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0xffffff, 0); // set background to transparent, (alpha needs to be true)
    renderer.setSize(w, h);
    renderer.render(scene, camera);

    // Orbit controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Window Resize
    const handleResize = () => {
      // Update size
      if (window.innerWidth < 800) {
        w = window.innerWidth;
      } else {
        w = window.innerWidth / 2;
      }
      h = window.innerHeight;

      // Update camera
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animate rotation and update scene
    let myReq;
    const loop = () => {
      mesh.rotation.y += 0.001;
      renderer.render(scene, camera);
      myReq = window.requestAnimationFrame(loop);
    };

    loop();

    // Astronaut
    const astronautElement = document.getElementById("astronaut");

    let astronautYPosition = 0;
    const astronautSpeed = 0.002;

    const astronautLoop = () => {
      astronautYPosition = Math.sin(Date.now() * astronautSpeed) * 10; // Adjust the factor to control the floating range
      astronautElement.style.transform = `translateY(${astronautYPosition}px)`;
      requestAnimationFrame(astronautLoop);
    };

    astronautLoop();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(myReq);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <header>
      <div className="canvas-container">
        <canvas id="webgl"></canvas>
      </div>
      <img id="astronaut" src={astronaut} alt="astronaut" />
      <div className="text">
        <h1>Ready for the trip of your life?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </header>
  );
};

export default LandingPage;
