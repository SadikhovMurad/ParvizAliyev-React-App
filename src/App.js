import './App.css';
import Layout from './components/Layout';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import GalleryLayout from './components/GalleryLayout';
import GraffitiGallery from './components/GraffitiGallery';
import TattooGallery from './components/TattooGallery';

function App() {
  return (


    <div className='App'>
      <div
        data-bs-spy="scroll"
        data-bs-target="#myNavbar"
        data-bs-offset={0}
        className="scrollspy-example"
        tabIndex={0}
      >
        <Layout />
        {/* <Home /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="Gallery" element={<GalleryLayout />} />
          <Route path="GraffitiGallery" element={<GraffitiGallery />} />
          <Route path="TattooGallery" element={<TattooGallery />} />
          <Route path="About" element={<About />} />
        </Routes>

      </div>
    </div>
  )
}

export default App;
