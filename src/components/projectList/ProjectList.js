import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.scss'
import projects from '../../assets/projects.json';

const ProjectList = () => (
<section>
    <div className="projectGrid">
        <h3>Selected Works</h3>
        <ul className="selected">
           {Object.keys(projects).map((page, index) => index <= 3 && <ProjectItem key={page} page={page}/>)}
        </ul>
        <h3>Other Projects</h3>
        <ul>
            {Object.keys(projects).map((page, index) => index > 3 && <ProjectItem key={page} page={page}/>)}
        </ul>
    </div> 
</section>
)

export default ProjectList