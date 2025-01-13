import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollHandler from "./components/ScrollHandler";
import { Toaster } from './components/ui/toaster';
 
 
export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
