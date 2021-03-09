import React from 'react';
import "./Footer.css";
import codepen from '../images/codepen.png';
import github from '../images/github.png';
import devpost from '../images/devpost.png';

const Footer = () => (
        <footer className = "Footer">
            <div className = "container">
                <a className = "github logo" href="https://github.com/danchepkwony">
                    <img className = "image" src={github} alt="Github"></img>
                </a>
                <a className = "logo" href="https://devpost.com/danchepkwony">
                    <img className = "image" src={devpost} alt="Devpost"></img>
                </a>
                <a className = "logo" href="https://codepen.io/danchepkwony">
                    <img className = "image" src={codepen} alt="CodePen"></img>
                </a>
            </div>
        </footer>
);

export default Footer;