import React from 'react';
import './Footer.scss';
import github from '../../assets/images/github.png';
import devpost from '../../assets/images/devpost.png';
import codepen from '../../assets/images/codepen.png';

const Footer = () => (
        <footer>
            <a href="https://github.com/danchepkwony">
                <img src={github} alt="Github"></img>
            </a>
            <a href="https://devpost.com/danchepkwony">
                <img src={devpost} alt="Devpost"></img>
            </a>
            <a href="https://codepen.io/danchepkwony">
                <img src={codepen} alt="CodePen"></img>
            </a>
        </footer>
);

export default Footer;