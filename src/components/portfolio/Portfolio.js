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

  //TODO: This is so gross
  var Projects = {communicaid: <Project title = {projects.Communicaid.title} description = {projects.Communicaid.description} skills = {projects.Communicaid.skills} img = {communicaid} hasLink = {true} link = {projects.Communicaid.link}/>,
                healthradar: <Project title = {projects.HealthRadar.title} description = {projects.HealthRadar.description} skills = {projects.HealthRadar.skills} img = {healthradar} hasLink = {true} link = {projects.HealthRadar.link} />,
                dashboard: <Project title = {projects.Basecamp.title} description = {projects.Basecamp.description} skills = {projects.Basecamp.skills} img = {dashboard}/>,
                statusboard: <Project title = {projects.StatusBoard.title} description = {projects.StatusBoard.description} skills = {projects.StatusBoard.skills} img = {status}/>
  }

//TODO: Clean this up
  return (
    <div className = "Portfolio">
      { props.project == null && props.wideEnough ?
      <div className = "Links">
        <div className = "project">
          <div className = "hover-container">
            <div className = "container" id="communicaid">
              <img className = "arrow"src={arrow}/>
            </div>
            <NavLink to="/portfolio/communicaid" activeClassName="link-active" className = "link">COMMUNICAID</NavLink>
          </div>
        </div>
        <div className = "project">
          <div className = "hover-container">
            <div className = "container" id="health">
              <img className = "arrow"src={arrow}/>
            </div>
            <NavLink to="/portfolio/health-radar" activeClassName="link-active" className = "link">MY HEALTH RADAR</NavLink>
          </div>
        </div>
        <div className = "project">
          <div className = "hover-container">
            <div className = "container" id="basecamp">
              <img className = "arrow"src={arrow}/>
            </div>
            <NavLink to="/portfolio/dashboard" activeClassName="link-active" className = "link">BASECAMP DASHBOARD</NavLink>
          </div>
        </div>
        <div className = "project">
          <div className = "hover-container">
            <div className = "container" id="status">
              <img className = "arrow"src={arrow}/>
            </div>
            <NavLink to="/portfolio/status-board" activeClassName="link-active" className = "link">STATUS BOARD</NavLink>
          </div>
        </div>
      </div>: <>{Projects[props.project]}</> }
    { !props.wideEnough ? <div className = "Portfolio-Mobile">
    </div> : ""}
    </div>
  )
}

export default PortfolioPage;