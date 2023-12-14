import './App.css';
import Layout from './components/Layout';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import About from './components/About';
// import myContext from './components/myContext';

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
          <Route path="Gallery" element={<Gallery />} />
          <Route path="About" element={<About />} />
        </Routes>

      </div>
    </div>
  )
}

export default App;
