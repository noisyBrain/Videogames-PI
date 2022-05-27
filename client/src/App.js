import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing/Landing.jsx";
// import Navbar from "./components/Nav/Navbar.jsx";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
    <Routes>

      <Route path="/" element={<Landing />} />
      {/* <Route path="/home" element={<Navbar />} /> */}
      <Route path="/home" element={<Home />} />

    </Routes>
    </div>
  );
}

export default App;
