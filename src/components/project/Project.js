import React, { useState, useRef } from 'react';
import './Project.scss';
import projects from '../../assets/projects.json';
import github from '../../assets/images/github.svg';
import web from '../../assets/images/web.svg';
import figma from '../../assets/images/figma.svg';
import arrow from '../../assets/images/arrow.svg';

const Project = (props) => {
    const [openDescription, setOpenDescription] = useState(false);
    const content = useRef(null);

    const onArrowClick = () => {
        var newState = !openDescription;
        setOpenDescription(!openDescription); 
        if(content.current){
            if(newState){
                content.current.style.maxHeight = content.current.scrollHeight + "px";
            }
            else{
                content.current.style.maxHeight = '0';
            }
        }
    }

    return (
        <li className={openDescription ? 'project open' : 'project'}>
            <div className='header'>
                <h2>{projects[props.project].title}</h2>
                <img className={openDescription ? 'link flip' : 'link'} id='project-arrow' src={arrow} alt='' onClick={onArrowClick}></img>
            </div>
            <div ref={content} className='description'>
                <ul>
                    {projects[props.project].tech.map((tech) =>
                        <li key={tech}>
                            {tech}
                        </li>)}
                </ul>
                <div className='content'>
                    {/* <img /> */}
                    <div>
                        <p>
                            {projects[props.project].description}
                        </p>
                        <div className='links'>
                            {projects[props.project].website && <a rel="noopener noreferrer" target="_blank" href={projects[props.project].website}><img className='link' src={web} alt="Website" /></a>}
                            {projects[props.project].github && <a rel="noopener noreferrer" target="_blank" href={projects[props.project].github}><img className='link' src={github} alt="Github" /></a>}
                            {projects[props.project].figma && <a rel="noopener noreferrer" target="_blank" href={projects[props.project].figma}><img className='link' src={figma} alt="Figma" /></a>}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default Project;