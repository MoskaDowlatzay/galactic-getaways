import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import planetData from './PlanetData'; // Adjust the path as needed
import starsTexture from '../assets/planetimg/stars.jpg';
import sunTexture from '../assets/planetimg/sun.jpg';

const ThreeScene = () => {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const orbitRef = useRef();
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.CubeTextureLoader().load([
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
    ]);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    sceneRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(-90, 140, 140);
    cameraRef.current = camera;

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbitRef.current = orbit;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const sun = createPlanet(12, sunTexture, 0);
    sun.castShadow = true;
    scene.add(sun);

    // Use emissive material to make the sun glow
    const material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(sunTexture), emissive: 0xfdb813 });
    const brightnessFactor = 0.7; // Adjust this value to decrease brightness
    material.emissive.multiplyScalar(brightnessFactor);
    sun.material = material;
    scene.add(sun);

    const sunlight = new THREE.PointLight(0xffffff, 10000);
    sun.add(sunlight);

    const planets = planetData.map((planet, index) => {
      return createPlanet(
        planet.size,
        planet.texture,
        20 * (index + 1),
        planet,
        planet.ringTexture ? { innerRadius: 10, outerRadius: 20, texture: planet.ringTexture } : null
      );
    });
    

    function createPlanet(size, texture, position, data, ring) {
      const geometry = new THREE.SphereGeometry(size, 25, 20);
      const material = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(texture) });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.x = position;
      planet.userData = data; // Attach the planet data to the userData property
      console.log('Ring data:', ring);

      if (ring) {
        const ringGeometry = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 30);
        const ringMaterial = new THREE.MeshStandardMaterial({
          map: new THREE.TextureLoader().load(ring.texture),
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        planet.add(ringMesh);
        ringMesh.rotation.x = -0.5 * Math.PI;
      }
      return planet;
    }
    

    planets.forEach((planet) => {
      planet.receiveShadow = true;
      scene.add(planet);
      const light = new THREE.PointLight(0xffffff, 1, 200);
      planet.add(light);
    });

    function animate() {
      sun.rotation.y += 0.002;
      planets.forEach((planet, index) => {
        const orbitRadius = 20 * (index + 1);
        planet.rotation.y += 0.01 / (index + 1);
        planet.position.x = Math.cos(planet.rotation.y) * orbitRadius;
        planet.position.z = Math.sin(planet.rotation.y) * orbitRadius;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const handlePlanetClick = (event) => {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planets, true);
    
      if (intersects.length > 0) {
        const selected = intersects[0].object;
        setSelectedPlanet(selected.userData); // Pass userData to setSelectedPlanet
        const targetPosition = selected.position.clone().add(new THREE.Vector3(0, 0, 30));
        const targetLookAt = selected.position.clone(); // Updated to target the planet's position
        animateZoom(targetPosition, targetLookAt);
      }
    };
    
    
    const animateZoom = (targetPosition, targetLookAt) => {
      const startPosition = camera.position.clone();
      const startLookAt = orbit.target.clone(); // Store initial target position
      const duration = 1000;
    
      let startTimestamp = null;
    
      const zoomAnimation = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
    
        const t = Math.min(progress / duration, 1);
        const easeT = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    
        camera.position.lerpVectors(startPosition, targetPosition, easeT);
        orbit.target.lerpVectors(startLookAt, targetLookAt, easeT); // Update orbit control's target
    
        if (progress < duration) {
          requestAnimationFrame(zoomAnimation);
        } else {
          const distance = camera.position.distanceTo(targetPosition);
          camera.near = Math.max(0.3, distance - 0);
          camera.far = distance + 1000;
          camera.updateProjectionMatrix();
    
          // Ensure orbit control's target is set to the final position
          orbit.target.copy(targetLookAt);
        }
      };
    
      requestAnimationFrame(zoomAnimation);
    };
    
    window.addEventListener('click', handlePlanetClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handlePlanetClick);
      renderer.dispose();
    };
  }, []);

  return (
    <>
    <div ref={sceneRef} />
    {selectedPlanet && (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '300px', // Adjust the width as needed
        background: '#1f1f1f',
        color: '#fff',
        padding: '20px',
        boxSizing: 'border-box',
        overflowY: 'auto', // Add scrollbar if content exceeds height
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{selectedPlanet.name}</h2>
        <p><strong>Description:</strong> {selectedPlanet.description}</p>
        <p><strong>Weather:</strong> {selectedPlanet.weather}</p>
        <p><strong>Distance:</strong> {selectedPlanet.distance} million kilometers</p>
        <p><strong>Travel Time:</strong> {selectedPlanet.travelTime} days</p>
      </div>
    )}
  </>
);
};
export default ThreeScene;
