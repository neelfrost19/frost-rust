import React, {useState, useEffect} from "react";
import FrostData from "../data.json"
import "./About.css"
import { Button } from './Button';

function About() {

  const [name, setName] = useState(FrostData.main.name);
  const [bio, setBio] = useState(FrostData.main.bio);
  const [street, setStreet] = useState(FrostData.main.address.street);
  const [city, setCity] = useState(FrostData.main.address.city);
  const [state, setState] = useState(FrostData.main.address.state);
  const [zip, setZip] = useState(FrostData.main.address.zip);
  const [phone, setPhone] = useState(FrostData.main.phone);
  const [email, setEmail] = useState(FrostData.main.email);

  useEffect(()=>{
    console.log(FrostData);

  },[])


  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src='/images/linkedlnpic.jpg'
          />
        </div>
        <div className="nine columns main-col">
            <div className="shift">
                <h2 className='textWhite'>About Me</h2>
                <p className='fontSan'>{bio}</p>
            </div>
          <div className="row">
            <div className="columns contact-details">
              <h2 className='textWhite'>Contact Details</h2>
              <p className="address">
                <span className='fontSan'>{name}</span>
                <br />
                <span className='fontSan'>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span className='fontSan'>{phone}</span>
                <br />
                <span className='fontSan' >{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
              <Button
                className='btns'
                style='btn--black'
                size='btn--large'>
                  <i className="fa fa-download"></i>
                   {"    Download Resume"}
              </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
