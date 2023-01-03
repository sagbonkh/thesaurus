import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
// import bgImage from './assets/videos/video1.mp4'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';

// export default function App() {
//   return (
//     <>
//       <Router>
//         {/* <Navbar /> */}
//         <HeroSection />
//         <Routes>
//           <Route path='/' exact component={Home} />
//         </Routes>
//       </Router>
//     </>
//   );
// }


import Main from './components/Main';
export default function App() {
  return(
    <>
      <Router>
        <Navbar />
        <HeroSection />
        {/* <Route path = '/' exact component={Home} /> */}
      </Router>
    </>
  );
}

