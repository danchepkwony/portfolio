import React from 'react';
import './ProjectList.scss';
import projects from '../../assets/projects.json';
import { Link } from 'react-router-dom';

const ProjectList = () => {
    //TODO: Add on scroll effect 

    // useEffect(() => {
    //   var projectListItems = document.getElementsByClassName("projectListItem");
    //   for (var i=0; i<projectListItems.length; i++) { // create a scene for each element
    //     new ScrollMagic.Scene({
    //               triggerElement: projectListItems[i], // y value not modified, so we can use element as trigger as well
    //               offset: 50,												 // start a little later
    //               triggerHook: 0.9,
    //             })
    //             .setClassToggle(projectListItems[i], "visible") // add class toggle
    //             .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
    //             .addTo(controller);
    //   }
    // })
   
    return(
        <section id="projects" className='projects'>
          <h1 id="scrollTo">Projects</h1>
          <ul>
            {Object.keys(projects).map((project) => 
               <li className="projectListItem" key={projects[project].title}>
                 <h2><Link to={"/" + project} className="link">{projects[project].title}</Link></h2>
               </li>)}
            </ul>
        </section>
)};
 
export default ProjectList;