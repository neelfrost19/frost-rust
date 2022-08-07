import React from 'react';
import './App.css';
import Backvideo from './component/backvideo.js';
import BoxContainer from './component/BoxContainer.js';
import About from './component/About.js';
import Details from './component/Details.js';
import Footer from './component/Footer.js';
import FrostData from "./data.json";

function Home() {
  return (
    <>
      <Backvideo/>
      <BoxContainer/>
      <About/>
      <Details/>
      <Footer/>
    </>
  );
}

export default Home;