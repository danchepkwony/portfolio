import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Home.scss';

import muncieAfghan from '../../assets/images/muncieafghan.png';
import sportslink from '../../assets/images/sportslink.png';
import statusboard from '../../assets/images/statusboard.png';
import digitalcorps from '../../assets/images/digitalcorps.png';

const HomePage = () => {

  return (
    <ul className = "projectGrid">
      <NavLink to="/projects/muncie-afghan">
        <li className="project">
          <div className="imageContainer">
            <img src={muncieAfghan} alt="Muncie Afghan Refugees"/>
          </div>
          <div className="textContainer">
            <h2>Muncie Afghan Refugee Website</h2>
            <ul>
              <li>React TypeScript</li>
              <li>CSS</li>
            </ul>
          </div>
        </li>
      </NavLink>
      <NavLink to="/projects/digital-corps">
        <li className="project">
            <div className="imageContainer">
              <img src={digitalcorps} alt="Digital Corps"/>
            </div>
            <div className="textContainer">
              <h2>Digital Corps Website</h2>
              <ul>
                <li>Wordpress</li>
                <li>PHP</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>CSS</li>
              </ul>
            </div>
        </li>
      </NavLink>
      <NavLink to="/projects/sportslink">
        <li className="project">
            <div className="imageContainer">
              <img src={sportslink}  alt="Sportslink"/>
            </div>
            <div className="textContainer">
            <h2>Sportslink Application Form</h2>
            <ul>
                <li>React Javascript</li>
                <li>Azure Functions</li>
                <li>C#</li>
              </ul>
            </div>
        </li>
      </NavLink>
      <NavLink to="/projects/status-board">
        <li className="project">
            <div className="imageContainer">
              <img src={statusboard} alt="Status Board"/>
            </div>
            <div className="textContainer">
            <h2>Slack Status Board</h2>
            <ul>
                <li>Azure Functions</li>
                <li>C#</li>
                <li>MySQL</li>
              </ul>
            </div>
        </li>
      </NavLink>
    </ul>
  )
}
 
export default withRouter(HomePage);