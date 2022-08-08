import React,{useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './backvideo.css';

function Backvideo() {

  const[videoNum, setVideoNum] = useState(1);

  const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

  const changeVideo = () => {
    if(videoNum<4){
        let num=videoNum;
        num++;
        setVideoNum(num);
    }
    else{
        setVideoNum(1);
    }
  }

  const resetVideo = () =>{
    setVideoNum(1);
    console.log(videoNum);
  }

  return (
  <section id="backvideo">
    <div className='hero-container'>
      <video src={"/videos/video-"+videoNum+".mp4"} autoPlay loop muted />
      <p>
        <h1 className='textL fontWelcome animFall'>
            <div className='word'>
                <span>Hi! </span>
                <span>I'm </span>
                <span>Neelesh </span>
                <span>Kumar </span>
                <span>Das</span>
                <span>.</span>
            </div>
        </h1>
        <br/>
        <h5 className='textM animFade'>Based in Bangalore. Software Engineer (JavaScript-React and Java)</h5>
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          style='btn--outline'
          size='btn--large'
          onClick={() => resetVideo()}
        >
        Reset
        </Button>
        <Button
          className='btns'
          style='btn--primary'
          size='btn--large'
          onClick={() => changeVideo()}
        >
         Switch Video <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  </section>
  );
}

export default Backvideo;


