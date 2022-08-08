import React,{useState,useEffect} from "react";
import data from "../data.json"
import "./Details.css"

function Details(){

  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skillmessage, setSkillmessage] = useState("");
  const [skills, setSkills] = useState([]);

    useEffect(()=>{
      console.log(data);
        if (data) {
          setSkillmessage(data.resume.skillmessage);
          setEducation(data.resume.education?data.resume.education.map(function (education) {
            return (
              <div key={education.school}>
                <h3>{education.school}</h3>
                <p className="info">
                  {education.degree} <span>&bull;</span>
                  <em className="date">{education.graduated}</em>
                </p>
                <p>{education.description}</p>
              </div>
            );
          }):[]);
          setWork( data.resume.work?data.resume.work.map(function (work) {
            return (
              <div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">
                  {work.title}
                  <span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                <p >{work.description?work.description.map((data)=>{
                return(<div className='textFont'>{data.value}</div>)
                }):[]}</p>
              </div>
            );
          }):[]);
          setSkills(data.resume.skills?data.resume.skills.map(function (skills) {
            var className = "bar-expand " + skills.name.toLowerCase();
            return (
              <li className='liStyle' key={skills.name}>
                <span style={{ width: skills.level }} className={className}></span>
                <em className='emStyle' >{skills.name}</em>
              </li>
            );
          }):[]);
        }
    },[])

  return (
    <section id="details">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span className='underL'>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div>
            <div>{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span className='underL'>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span className='underL'>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
