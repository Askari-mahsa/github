import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Component/Profile';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/About" element={<About />} ></Route> 
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    
 
  );
}

export default App;
