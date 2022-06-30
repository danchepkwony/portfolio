import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../assets/projects.json';

export default function ProjectList(props){
    return(
        <li className="project">
            <h2><Link to={"/" + props.page} className='blue'>{projects[props.page].title}</Link></h2>
            <ul>
                {projects[props.page].tech.map((tech) => (
                    <li key={props.page + " " + tech}>{tech}</li>
                ))}
            </ul>
        </li>
    )
}