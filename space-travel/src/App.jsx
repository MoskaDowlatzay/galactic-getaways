// do we need to remove this hook?
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
//import LaunchData from "./SpaceX/LaunchData";
import RocketData from "./RocketLaunch/RocketData";
import Contact from "./components/Contact";
import ApiTest from "./components/ApiTest";

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
          {/* <Route path="/LaunchData" element={<LaunchData />} /> */}
          <Route path="/RocketData" element={<RocketData />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <ApiTest />
      <Footer />
    </>
  );
}

export default App;
