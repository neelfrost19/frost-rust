import React from 'react';
import './BoxContainer.css';
import Box from './Box';
import {useEffect, useState} from "react";
import axios from "axios"
import { Button } from './Button';


function BoxContainer() {
    const[repo, setRepo] = useState([]);
    const[repoData, setRepoData] =useState('');
    const[btnVis, setBtnVis] = useState(true);

    const openInNewTab = url => {
          window.open(url, '_blank', 'noopener,noreferrer');
        };

    const closeList = () => {
        setBtnVis(true);
    }

    async function repoDataURL() {
        //Get repo data about github user
        setBtnVis(false);
        await fetch("https://api.github.com/users/neelfrost19/repos")
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(36, result);
              const list = result.map((item) => (

                <div>
                    <ul className='box__items'>
                        <Box
                        src={item.owner.avatar_url}
                        text = 'A project written in java to capture and read packets using JPnet library'
                        label = {item.name +" (" +item.language+")"}
                        path='/'
                        onClick={() => openInNewTab(item.html_url)}
                        />
                    </ul>
                </div>
              ));
              setRepoData(list);
            },
            (error) => {
              console.log(error);
            }
          );
      }
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
   <section id="project">
    <div className='box'>
      <h1>Check out these Projects!</h1>
      <div className='box__container'>
        <div className='box__wrapper'>
        {btnVis &&
        <Button
            className='btns'
            style='btn--black'
            size='btn--large'
            onClick={repoDataURL}
        >
            List my repositories
        </Button>}
        {!btnVis && repoData}
        {!(btnVis) &&
                <Button
                    className='btns'
                    style='btn--black'
                    size='btn--medium'
                    onClick={closeList}
                >
                    close
                </Button>}
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
          {/*<ul className='box__items'>
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
          </ul>*/}
        </div>
      </div>
    </div>
     </section>
  );
}

export default BoxContainer;
