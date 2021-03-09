import React from 'react';
import './Project.css';

const Project = (props) => (
    <div className = "Project">
      <div className = "container">
        <img className = "image" src={props.img} alt="example"/>
      </div>
      <div className = "text">
        <h1 className = "heading">{props.title}</h1>
        <p className = "details">{props.description}</p>
        <ul className = "skills">
            {props.skills.map(skill => <li key={skill} className ="skill">{skill}</li>)}
        </ul>
      </div>
    </div>
  );

export default Project;