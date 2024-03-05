import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import moonTexture from "../assets/img/moon-texture.jpg";
import moonMap from "../assets/img/moon-map.jpg";
import background from "../assets/img/stars.png";
import astronaut from "../assets/img/yoda.png";
import rocket from "../assets/img/rocket.png";
import { useNavigate } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
//import NavBar from "./NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

const LandingPage = () => {
  // Enable navigation between pages using react router dom
  const navigate = useNavigate();

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

    // Rocket
    const handleClick = () => {
      const rocketElement = document.getElementById("rocket");

      rocketElement.style.transition = "transform 3s";
      rocketElement.style.transform = "translateY(-150vh)";
    };

    const rocketElement = document.getElementById("rocket");
    rocketElement.addEventListener("click", handleClick);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(myReq);
      rocketElement.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // NASA PICTURE OF THE DAY

  const [pictureData, setPictureData] = useState(null);
  const [showPicture, setShowPicture] = useState(false);
  const API_KEY = "qqZZSJ3qmFfhdgHmNLkDnN6YaxHdBmEuAddTHPgx";

  useEffect(() => {
    // Fetch picture of the day when showPicture is true
    const fetchPictureOfTheDay = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        );
        setPictureData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching NASA picture of the day:", error);
      }
    };

    if (showPicture) {
      fetchPictureOfTheDay();
    }
  }, [showPicture]);

  // Click event for showing picture when clicking on astronaut
  const handleClickAstronaut = () => {
    event.stopPropagation(); // Prevent the click event from reaching the document
    setShowPicture(true);
  };

  // PictureOfTheDay disappears when clicking outside of it
  const handleDocumentClick = (event) => {
    if (
      showPicture &&
      !document.getElementById("astronaut").contains(event.target)
    ) {
      setShowPicture(false);
    }
  };

  // Close button functionality
  const handleClosePicture = () => {
    setShowPicture(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showPicture]);

  return (
    <header>
      <div className="canvas-container">
        <canvas id="webgl"></canvas>
      </div>
      <img
        id="astronaut"
        src={astronaut}
        alt="astronaut"
        onClick={handleClickAstronaut}
      />
      <img id="rocket" src={rocket} alt="rocket" />

      {showPicture && pictureData && (
        <Card className="picture-of-the-day" style={{ width: "600px" }}>
          <Button
            variant="light"
            className="close-button"
            onClick={handleClosePicture}
            style={{ position: "absolute", top: "20px", right: "20px" }}
          >
            X
          </Button>
          <a href={pictureData.url} target="_blank" rel="noopener noreferrer">
            <Card.Img
              variant="top"
              src={pictureData.url}
              alt={pictureData.title}
              style={{ maxHeight: "300px", width: "600px", objectFit: "cover" }}
            />
          </a>
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "1.25rem",
                textAlign: "center",
                lineHeight: "38px",
              }}
            >
              <a
                href={pictureData.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pictureData.title}
              </a>
            </Card.Title>
            <Card.Text
              style={{ fontSize: "12px", padding: "8px", textAlign: "center" }}
            >
              {pictureData.explanation}
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      <div className="text">
        <h1>Ready for the trip of your life?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* button to display component with Saugat's API (change component name as needed) */}
        <button
          className="m-2 spacebutton"
          onClick={() => navigate("/SpaceLocations")}
        >
          Space Locations
        </button>
        {/* display component with to SpaceX API */}
        <button
          className="m-2 spacebutton"
          onClick={() => navigate("/RocketData")}
        >
          Next 5 Rockets
        </button>
        <button
          className="m-2 spacebutton"
          onClick={() => navigate("/LaunchData")}
        >
          SpaceX Launches
        </button>
      </div>
    </header>
  );
};

export default LandingPage;
