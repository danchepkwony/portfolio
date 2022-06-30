import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
      <header>
        <nav className = "navigation"> 
              <div> 
                <a className="link" >Projects</a>
                <a className="link" >About</a>
              </div>
        </nav>
      </header>
);
 
export default Navigation;