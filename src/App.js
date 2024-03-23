import React from 'react';
import './assets/css/main.css';
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CircleCommands from "./components/CircleCommands";
import MainIndex from './components/MainIndex'
import Footer from './components/Footer'

function App() {
  return (
      <div>
          <NavBar />
          <Hero />
          <CircleCommands />
          <MainIndex />
          <Footer />
      </div>
  );
}

export default App;
