import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Designers from './components/pages/Designers';

export default function App() {
  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = '/' element=
          {<Home />}></Route>
          <Route exact path = '/designers' element=
          {<Designers />}></Route>
          <Route exact path = '/about' element=
          {<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

