// do we need to remove this hook?
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LaunchData from "./spacex/LaunchData";
import RocketData from "./RocketLaunch/RocketData";
import Contact from "./components/Contact";
import ThreeScene from "./PlanetThree/ThreeScene";
function App() {
  // do we need to remove this hook?
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/LaunchData" element={<LaunchData />} />
          <Route path="/RocketData" element={<RocketData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SpaceLocations" element={<ThreeScene />}/>
          <Route path="/explore" element={<ThreeScene />}/>
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
