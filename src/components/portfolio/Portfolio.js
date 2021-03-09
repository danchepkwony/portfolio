import React from 'react';
import { NavLink } from 'react-router-dom';
import './Portfolio.css';
import Project from './project/Project';
import example from '../images/project_placeholder.png';
import communicaid from '../images/communicaid-mockup-bg.png';
import status from '../images/status.png';

const PortfolioPage = ( props ) => {

//Just thought I'd save this for if I think about trying this again--
//It detects what element you're hovering over and aligns the section element with that element based on window height

 /* 
  const [section, setSection] = useState("Projects");
  const [currentProject, setCurrentProject] = useState(document.getElementById("communicaid"));

    useEffect(() => {
      var isMounted = true;

      const transitionSection = (project) => {
        var rect = project.getBoundingClientRect();
        var percent = rect.top / window.innerHeight * 100;
        document.getElementById("Section").style.top = percent + "%";
      };

      const followMouse = throttle((e) => {
        if(isMounted){
          mouseX = e.clientX;
          mouseY = e.clientY;
          var element = document.elementFromPoint(e.clientX, e.clientY);
          if(document.getElementById("Digital Corps")){
            for( var project of document.getElementsByClassName("Project")){
              if(project.contains(element)){
                setCurrentProject(project);
                transitionSection(project);
              }
            }
            if(document.getElementById("Digital Corps").contains(element)){
              setSection("Digital Corps - Ball State")
            }
            else if(document.getElementById("Hackathon").contains(element)){
              setSection("Hackathon")
            }
          }
        }
      }, 25);

      if(props.wideEnough){
        document.addEventListener("mousemove", followMouse);
      };

      return () => {isMounted = false; 
        window.removeEventListener("mousemove", followMouse)}
    }
  );

  <div className = "Spacer">
    <p id = "Section" className="Section">
      {props.wideEnough ? "►" + section : ""}
    </p>
  </div> 

  <div className = "Summaries">
          <div id="Hackathon" className = "section-split">
            <Project />
            
          </div>
          <div id="Digital Corps" className = "section-split">
           
            
            <div className = "break" />
          </div>
        </div>
*/

var Projects = {communicaid: <Project id = "communicaid" title = "COMMUNICAID" description = "Communicaid is a lo-fi mockup created for a hackthon. The app would ease communication " skills = {["React Native"]} img = {communicaid}/>,
                healthradar: <Project id = "example_two" title = "MY HEALTH RADAR" description = "myHealthRadar is a COVID-19 inspired device-integrated electronic medical record service created for a hackathon. I worked on the frontend using React and Firebase authentication, and some of the backend with Firebase's Realtime Database." skills = {["React", "Firebase Auth", "Firebase DB"]} img = {example}/>,
                dashboard: <Project title = "BASECAMP DASHBOARD" description = "This is an example project. I made this example. Look at it." skills = {["React", "PHP"]} img = {example}/>,
                statusboard: <Project title = "STATUS BOARD" description = "This is an example project. I made this example. Look at it." skills = {["C#", ".Net", "Azure Functions"]} img = {status}/>
}

  return (
    <div className = "Portfolio">
      { props.project == null ? <div className = "Links">
        <NavLink to="/portfolio/communicaid" activeClassName="link-active" className = "link">COMMUNICAID</NavLink>
        <NavLink to="/portfolio/health-radar" activeClassName="link-active" className = "link">MY HEALTH RADAR</NavLink>
        <NavLink to="/portfolio/dashboard" activeClassName="link-active" className = "link">BASECAMP DASHBOARD</NavLink>
        <NavLink to="/portfolio/status-board" activeClassName="link-active" className = "link">STATUS BOARD</NavLink>
      </div> : <><div className = "Spacer" /> {Projects[props.project]}</> }

    </div>
  )
}

export default PortfolioPage;