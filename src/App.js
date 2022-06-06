import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Components/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
