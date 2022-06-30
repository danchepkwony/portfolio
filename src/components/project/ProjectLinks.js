import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../assets/projects.json';

const ProjectLinks = (props) => (
<nav className='project-links'>
    <ul>
        {Object.keys(projects).map((page) => (
            <li key={page}><Link to={page} className={!(page === props.page) ? "blue" : "black"}>{projects[page].link}</Link></li>
        ))}
    </ul>
</nav>
)

export default ProjectLinks