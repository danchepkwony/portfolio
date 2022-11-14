import React, { useContext } from 'react';
import './Footer.scss';
import codepen from '../../assets/images/codepen.svg';
import devpost from '../../assets/images/devpost.svg';
import github from '../../assets/images/github.svg';
import { ThemeContext } from '../../context/Theme';

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    
    return(
    <footer className='footer'>
        <div>
        <a href="https://codepen.io/danchepkwony" target="_blank" rel="noopener noreferrer">
            <img className={"link " + (theme ? "light" : "dark")} src={codepen} alt="codepen"/>
        </a>
        <a href="https://devpost.com/danchepkwony" target="_blank" rel="noopener noreferrer">
            <img className={"link " + (theme ? "light" : "dark")} src={devpost} alt="devpost"/>
        </a>
        <a href="https://github.com/danchepkwony" target="_blank" rel="noopener noreferrer">
            <img className={"link " + (theme ? "light" : "dark")} src={github} alt="github"/>
        </a>
        </div>
    </footer>
)};
 
export default Footer;