import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Animation from './components/Animation';
import About from './components/About';
import Projects from './components/Projects/Index';

 function App() {
  return (
  <div>
    <Navbar></Navbar>
    <main>
      <About></About>
      <Projects></Projects>
    </main>
    </div>
  )
}

export default App;
