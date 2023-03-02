import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Designers from './components/pages/Designers';
import Register from './components/pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Streetwear from './components/pages/Streetwear';

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
          <Route exact path = '/streetwear' element=
          {<Streetwear />}></Route>
          <Route exact path = '/about' element=
          {<About />}></Route>
          <Route exact path = '/login' element=
          {<Login />}></Route>
          <Route exact path = '/register' element=
          {<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

