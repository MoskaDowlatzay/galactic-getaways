// do we need to remove this hook?
import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // do we need to remove this hook?
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar/>
      <LandingPage />
      <Footer/>
    </>
  );
}

export default App;
