import React from 'react';
import { NavLink } from 'react-router-dom';
import navBars from '../images/bars.png';
import './Navigation.css';

const Navigation = (props) => {

  const animate = (baseClass, additionalClass) => {
    var elements = document.getElementsByClassName(baseClass);
    for(var element of elements){
      element.className = baseClass + " " +  additionalClass;
    }
  }

  const toggleDropdown = () => {
    window.scrollTo(0, 0);
    animate("item", "slide_in");
    animate("break", "slide_in");
    document.getElementById("root").style.overflow = "hidden";
    document.getElementById("root").style.height = "100vh";
  }

  const exitDropdown = (e) => {
    document.getElementById("root").style.overflow = "auto";
    document.getElementById("root").style.height = "auto";
    animate("item", "slide_out");
    animate("break", "slide_out");
  }
  
    return (
      <nav className = "Navigation"> 
      {props.wideEnough ? (
          <div className = "Normal"> 
            <NavLink to="/" exact activeClassName="link-active" className = "link">HOME<div className = "link-underline"/></NavLink>
            <NavLink to='/portfolio' activeClassName="link-active" className = "link">PORTFOLIO<div className = "link-underline"/></NavLink>
            <NavLink to='/contact' activeClassName="link-active" className = "link" style={{marginRight: "3rem"}}>CONTACT<div className = "link-underline"/></NavLink>
            <div className = "Nav-underline"></div>
          </div>
        ) : (
          <div className="Dropdown">
            <img className="button" src={navBars} onClick={toggleDropdown} alt="Open Page Links"/>
            <ul className="content">
              <li className = "item">
                <NavLink to='/' className = "dropdown-link" onClick={exitDropdown}>HOME</NavLink>
              </li>
              <li className = "item">
                <NavLink to='/portfolio' activeClassName="dropdown-link" className = "dropdown-link" onClick={exitDropdown}>PORTFOLIO</NavLink>
              </li>
              <li className = "item">
                <NavLink to='/contact' className = "dropdown-link" onClick={exitDropdown}>CONTACT</NavLink>
              </li>
              <div className= "break"></div>
              <div className= "break"></div>
            </ul>
          </div>
      )}
      </nav>
      );
};
 
export default Navigation;