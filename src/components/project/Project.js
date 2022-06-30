import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectLinks from './ProjectLinks';
import './Project.scss';
import projects from '../../assets/projects.json';

import maarc from '../../assets/images/maarc.jpeg';
import maarc2 from '../../assets/images/maarc2.png';

import puzzle from '../../assets/images/puzzle.png';
import puzzle2 from '../../assets/images/puzzle2.png';

import sportslink from '../../assets/images/sportslink.png';
import sportslink2 from '../../assets/images/sportslink2.png';

import slack from '../../assets/images/slack.png';
import slack2 from '../../assets/images/slack2.png';

import lsamp from '../../assets/images/lsamp.png';
import lsamp2 from '../../assets/images/lsamp2.png';

import techpoint from '../../assets/images/techpoint.png';
import techpoint2 from '../../assets/images/techpoint2.jpeg';

const Project = (props) => {
    useEffect(() => {
        const page = document.getElementsByClassName('page')[0];
        if(page){
            page.classList.add('slideInReverse');
            setTimeout(function () {
                page.classList.remove('slideInReverse');
            }, 500)
        }

        return () => {
            if(page){
                page.classList.remove('slideOutReverse');
                setTimeout(function () {
                    page.classList.add('slideOutReverse');
                }, 500)
            }
        }
    }, [])

    var image;
    var image2;
    switch (props.page){
        case 'maarc':
            image = maarc;
            image2 = maarc2;
            break;
        case 'puzzle':
            image = puzzle;
            image2 = puzzle2;
            break;
        case 'sportslink':
            image = sportslink;
            image2 = sportslink2;
            break;
        case 'slack':
            image = slack;
            image2 = slack2;
            break;
        case 'lsamp':
            image = lsamp;
            image2 = lsamp2;
            break;
        case 'techpoint':
            image = techpoint;
            image2 = techpoint2;
            break;
        default:
            break;
    }

    return(
        <div className="projects">
            <Link to='/' className='back blue'><span>{"<"}</span> Home</Link>
            <div className='left'>
            <div className='text'>
                <div className="sub-alt">{projects[props.page].tech.map((elem, index) => (elem + (index < projects[props.page].tech.length - 1 ? ", " : " ")))}</div>
                <h1>{projects[props.page].title}</h1>
                <p>{projects[props.page].description}</p>
            </div>
            </div>
            <div className='right'>
                <main className="project">
                    <div>
                        {projects[props.page].website && <a className="blue" href={projects[props.page].website} target="_blank" rel="noopener noreferrer">Visit website</a>}
                        <p>
                            {projects[props.page].p1}
                        </p>
                        {projects[props.page].image1 && <img src={image} alt={projects[props.page].alt1}/>}
                        {projects[props.page].p2 && <p>
                            {projects[props.page].p2}
                        </p>}
                        {projects[props.page].image2 && <img src={image2} alt={projects[props.page].alt2}/>}
                    </div>
                </main>
                <ProjectLinks page={props.page}/>
            </div>
        </div>
)};
 
export default Project;