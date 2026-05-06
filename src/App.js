import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Home from './components/home';
import About from './components/about';
import Academics from './components/academics';
import Sports from './components/sports';
import Contacts from './components/contacts';
import Library from './components/library';

import Apply from './components/apply';
import Navbar from './components/navbar';
import Programs from './components/programs';
import Gallery from './components/gallery';
import Footer from './components/footer';
import Faq from './components/faq';
import BackToTop from './components/backtotop';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: true        // animate only once
    });
  }, []);
  return (
    <Router>
      <div className="App">

        <Navbar />



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/library" element={<Library />} />
          
          <Route path="/apply" element={<Apply />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

        <Footer />
        <BackToTop />

      </div>
    </Router>
  );
}

export default App;