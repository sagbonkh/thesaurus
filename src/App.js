import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
