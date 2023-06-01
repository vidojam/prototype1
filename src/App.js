
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Error404 from './pages/Error404';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
