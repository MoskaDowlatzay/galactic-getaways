// do we need to remove this hook?
import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  // do we need to remove this hook?
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
