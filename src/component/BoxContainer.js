import React from 'react';
import './BoxContainer.css';
import Box from './Box';
import {useEffect, useState} from "react";
import axios from "axios"


function BoxContainer() {
    const[repo, setRepo] = useState([]);

    const getRepo = async () => {
            try{
                const data = await axios('https://api.github.com/users/neelfrost19/repos');
                setRepo(data);
                console.log(repo);
            }
            catch(err){
                console.log(err);
            }
        }



  return (
    <div className='box'>
      <h1>Check out these Projects!</h1>
      <div className='box__container'>
        <div className='box__wrapper'>
          {/*<ul className='box__items'>
            <Box
              src='images/img-9.jpg'
              text='A project written in java to capture and read packets using JPnet library'
              label='JAVA'
              path='/services'
            />
            <Box
              src='images/img-2.jpg'
              text='This website'
              label='React.js'
              path='/Home'
            />
          </ul>*/}
          <ul className='box__items'>
          {repo.length!==0?repo.data.map((item, i)=>{
                <Box
                src='images/img-2.jpg'
                text = {item.description}
                label = {item.language}
                path='/Home'
                />
               }
            ):[]
          }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BoxContainer;
