import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
      <header>
        <NavLink to="/projects" exact><h1>Dan Chepkwony</h1></NavLink>
        <nav className = "navigation"> 
              <div> 
                <NavLink className="link" activeClassName = "activeLink" to="/projects">Projects</NavLink>
                <NavLink className="link" activeClassName = "activeLink" to='/aboutme'>About</NavLink>
                <NavLink className="link" activeClassName = "activeLink" to='/resume'>Resume</NavLink>
              </div>
        </nav>
      </header>
);
 
export default Navigation;