import React from 'react';
import '../App.css';
import { Button } from './Button';
import './backvideo.css';

function Backvideo() {

  const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };



  return (
  <section id="backvideo">
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <p>
        <h1 className='textL'> Hi! I'm Neelesh Kumar Das.</h1>
        <br/>
        <h5 className='textM'>Based in Bangalore. Software Engineer (JavaScript-React and Java)</h5>
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          style='btn--outline'
          size='btn--large'
        >
        Reset
        </Button>
        <Button
          className='btns'
          style='btn--primary'
          size='btn--large'
          onClick={() => openInNewTab('https://www.youtube.com/watch?v=yr7P8fyo6uU')}
        >
         Switch Video <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  </section>
  );
}

export default Backvideo;


