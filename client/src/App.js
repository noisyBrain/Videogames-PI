import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home";
import CreateForm from "./components/Form/CreateForm";
import VideogameDetail from "./components/Home/VideogameDetail";

function App() {
  return (
    <div className="App">
      <Routes>
      
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videogame/:id" element={<VideogameDetail />} />
        <Route path="/videogame/create" element={<CreateForm />} />

      </Routes>
    </div>
  );
}

export default App;
