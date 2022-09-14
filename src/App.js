import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Animation from './components/Animation';
import About from './components/About';

 function App() {
  return (
  <div>
    <Navbar></Navbar>
    <main>
      <About></About>
    </main>
    </div>
  )
}

export default App;
