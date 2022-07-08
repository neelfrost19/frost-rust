import React from 'react';
import '../App.css';
import { Button } from './Button';
import './backvideo.css';

function Backvideo() {

  const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };



  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <p>adadadsadad </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          style='btn--outline'
          size='btn--large'
        >
        dhdhdfghdfhdfhdfhdfh
        </Button>
        <Button
          className='btns'
          style='btn--primary'
          size='btn--large'
          onClick={() => openInNewTab('https://www.youtube.com/watch?v=yr7P8fyo6uU')}
        >
         dfhdfhdfhdfhdfhdfhh <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Backvideo;


