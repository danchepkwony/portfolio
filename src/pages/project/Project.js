import React, {useContext} from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import './Project.scss';
import { ThemeContext } from '../../context/Theme';
import projects from '../../assets/projects.json';

import github from '../../assets/images/github.svg';
import web from '../../assets/images/web.svg';
import figma from '../../assets/images/figma.svg';

import maarc from '../../assets/images/maarc.png';
import maarc2 from '../../assets/images/maarc2.png';

import bobross from '../../assets/images/bobross.png';
import bobross2 from '../../assets/images/bobross2.png';

import puzzle from '../../assets/images/puzzle.png';
import puzzle2 from '../../assets/images/puzzle2.png';

import sportslink from '../../assets/images/sportslink.png';
import sportslink2 from '../../assets/images/sportslink2.png';

import slack from '../../assets/images/slack.png';
import slack2 from '../../assets/images/slack2.png';

import lsamp from '../../assets/images/lsamp.png';
import lsamp2 from '../../assets/images/lsamp2.png';

const Project = (props) => {
    const {theme} = useContext(ThemeContext);

    var image = "";
    var image2 = "";

    switch (props.page){
        case 'maarc':
            image = maarc;
            image2 = maarc2;
            break;
        case 'bobross':
            image = bobross;
            image2 = bobross2;
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
        default:
            break;
    }

    return(
        <>
            <main className="project">
                <nav className='projects-nav'>
                    <Link to='/' className='link'><span>{"<"}</span> home</Link>
                </nav>
                <header>
                    <h1>{projects[props.page].title}</h1>
                    <div>{projects[props.page].description}</div>
                    <ul className="tech-list">
                        {projects[props.page].tech.map((elem) => <li key={elem} className='tech'>{elem}</li>)}
                    </ul>
                    {(projects[props.page].website || projects[props.page].github || projects[props.page].figma) &&
                        <div className={'links ' + (theme ? "light" : "dark")} >
                            {projects[props.page].website && <a rel="noopener noreferrer" target="_blank" href={projects[props.page].website}><img className='link' src={web} alt="Website" /></a>}
                            {projects[props.page].github && <a rel="noopener noreferrer" target="_blank" href={projects[props.page].github}><img className='link' src={github} alt="Github" /></a>}
                            {projects[props.page].figma && <a rel="noopener noreferrer" target="_blank" href={projects[props.page].figma}><img className='link' src={figma} alt="Figma" /></a>}
                        </div>
                    }
                </header>
                <div className='project-description'>
                    <div className='section'>
                        <p>
                        {projects[props.page].website && projects[props.page].websiteText}
                        {projects[props.page].p1}
                        </p>
                        {projects[props.page].image1 && 
                            <figure>
                                <img src={image} alt=""/>
                                <figcaption>{projects[props.page].alt1}</figcaption>
                            </figure>
                        }
                    </div>
                    <div className='section-reverse'>
                        <p>
                            {projects[props.page].p2}
                        </p>        
                        {projects[props.page].image2 && 
                            <figure>
                                <img src={image2} alt=""/>
                                <figcaption>{projects[props.page].alt2}</figcaption>
                            </figure>
                        }
                    </div>
                </div>
                <nav className='projects-nav space-between'>
                    <Link to={Object.keys(projects).findIndex((elem) => elem === props.page) - 1 > -1 ? Object.keys(projects)[Object.keys(projects).findIndex((elem) => elem === props.page) - 1] : Object.keys(projects)[Object.keys(projects).length - 1]} className='link'><span>{"<"}</span> previous</Link>
                    <Link to={Object.keys(projects).length > Object.keys(projects).findIndex((elem) => elem === props.page) + 1 ? Object.keys(projects)[Object.keys(projects).findIndex((elem) => elem === props.page) + 1] : Object.keys(projects)[0]} className='link'>next <span>{">"}</span></Link>
                </nav>
                <footer>
                    <ul className="projects-list-nav">{Object.keys(projects).map((project, index) => <li key={project}><Link className={project === props.page ? "bold link" : "link"} to={project}>{projects[project].link}</Link> {index < Object.keys(projects).length - 1 ? <div>•</div> : ""}</li>)}</ul>
                </footer>
            </main>
        </>
)};
 
export default withRouter(Project);