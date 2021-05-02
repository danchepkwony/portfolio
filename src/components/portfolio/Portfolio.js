import React from 'react';
import { NavLink } from 'react-router-dom';
import './Portfolio.css';
import Project from './project/Project';
import communicaid from '../images/communicaid.png';
import healthradar from '../images/myhealthradar.png';
import dashboard from '../images/dashboard.png';
import status from '../images/statusboard.png';
import arrow from '../images/yellow-arrow.png';
import projects from '../../projects.json';

const PortfolioPage = ( props ) => {

  var Projects = {communicaid: <Project title = {projects.Communicaid.title} description = {projects.Communicaid.description} skills = {projects.Communicaid.skills} img = {communicaid} hasLink = {true} link = {projects.Communicaid.link}/>,
                healthradar: <Project title = {projects.HealthRadar.title} description = {projects.HealthRadar.description} skills = {projects.HealthRadar.skills} img = {healthradar} hasLink = {true} link = {projects.HealthRadar.link} />,
                dashboard: <Project title = {projects.Basecamp.title} description = {projects.Basecamp.description} skills = {projects.Basecamp.skills} img = {dashboard}/>,
                statusboard: <Project title = {projects.StatusBoard.title} description = {projects.StatusBoard.description} skills = {projects.StatusBoard.skills} img = {status}/>
  }

  //TODO: Make
  return (
    <div className = "Portfolio">
      { props.project == null ?
      <div className = "Links">
        <ProjectLink id = "communicaid" wideEnough = {props.wideEnough} lineColor="orange" />
        <ProjectLink id = "health-radar" wideEnough = {props.wideEnough} lineColor="yellow"/>
        <ProjectLink id = "dashboard" wideEnough = {props.wideEnough} lineColor="orange"/>
        <ProjectLink id = "status-board" wideEnough = {props.wideEnough} lineColor="yellow"/>
      </div>: <>{Projects[props.project]}</> }
    </div>
  )
}

const ProjectLink = (props) => (
    <div className = {props.wideEnough ? "project" : "project-mobile"}>
      <div className = "hover-container">
        <div className = "container" id={props.id}>
          <img className = "arrow" src={arrow} alt=""/>
        </div>
        <NavLink to={"/portfolio/" + props.id} activeClassName="link-active" className = {"link " + props.lineColor}>{props.id.toUpperCase().replace('-', ' ')}</NavLink>  
      </div>
    </div>
)

export default PortfolioPage;