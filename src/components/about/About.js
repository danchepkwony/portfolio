import React from 'react';
import { withRouter } from 'react-router';
import './About.scss';
import headshot from '../../assets/images/yellow.jpeg';

const AboutPage = () => (
    <main className = "about">
        <h1>Nice to meet you</h1>
        <div className="flex">
            <div className="image">
                <img src={headshot} alt="Me"/>
            </div>
            <div className="text">
                <p>
                    Hi, I'm Dan. I'm a junior at Ball State University majoring in Computer Science
                    and employee at the Digital Corps, an on-campus agency that makes websites and other digital products.
                </p>
                <p>
                    I learned to code by making bad Roblox games, and I love creating digital experiences.
                </p>
                <p>
                    Feel free to email me at <a href="mailto:dan.k.chepkwony.com">dan.k.chepkwony@gmail.com</a>
                </p>
            </div>
        </div> 
    </main>
);
 
export default withRouter(AboutPage);