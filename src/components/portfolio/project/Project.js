import React from 'react';
import './Project.css';

const Project = (props) => (
    <div className = "Project">
      <div className = "header">
        <h1 className = "title">{props.title}</h1>
        <ul className = "skills">
              {props.skills.map(skill => <li key={skill} className ="skill">{skill}</li>)}
          </ul>
      </div>
      <div className="body">
        <div className = "container">
          <img className = "image" src = {props.img} alt={"Image of " + props.title}/>
        </div>
        <div className = "text">
          <p className = "details">{props.description}</p>
          { props.hasLink ? <a className = "link" href={props.link}>View Project</a> : ""}
        </div>
      </div>
    </div>
  );

export default Project;