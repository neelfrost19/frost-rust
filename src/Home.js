import React from 'react';
import './App.css';
import Backvideo from './component/backvideo.js';
import BoxContainer from './component/BoxContainer.js';
import Footer from './component/Footer.js';

function Home() {
  return (
    <>
      <Backvideo/>
      <BoxContainer/>
      <Footer/>
    </>
  );
}

export default Home;