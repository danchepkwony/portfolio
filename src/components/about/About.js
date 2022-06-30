import React from 'react';
import './About.scss';
import resume from '../../assets/resume.pdf';
// import github from '../../assets/images/github.svg';
// import devpost from '../../assets/images/devpost.svg';
// import codepen from '../../assets/images/codepen.svg';

const About = () => (
    <section className="about">
            <h1 className='hide-desktop'>About Me</h1>
            <p>
                Hi, I'm Dan. I'm a junior at Ball State University majoring in Computer Science.
            </p>
            <p>
                I started coding in highschool by making bad Roblox games.
                Now, I work at the Digital Corps, an on-campus agency that makes websites and other digital products.
                At the Digital Corps, I've learned how to collaborate with other developers and disciplines. 
            </p>
            <p>
                My favorite thing to do is collaborate with UX and design.
                I love seeing art be used to envision effective products 
                and getting to implement those visions. 
            </p>
            <p className='links'>
                <a className='blue' href={resume} download="Resume_Chepkwony">
                    Download my resume
                </a>
                <a className='blue' href="mailto: dan.k.chepkwony@gmail.com">
                    Email me
                </a>
            </p>
    </section>
);
 
export default About;

/* <div>
    <a href="https://github.com/danchepkwony">
        <img src={github} alt="Github"></img>
    </a>
    <a href="https://devpost.com/danchepkwony">
        <img src={devpost} alt="Devpost"></img>
    </a>
    <a href="https://codepen.io/danchepkwony">
        <img src={codepen} alt="CodePen"></img>
    </a>
</div> */