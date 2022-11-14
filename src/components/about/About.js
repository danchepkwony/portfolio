import React from 'react';
import './About.scss';

const About = () => {
    return(
    <section id="about" className='about'>
        <h1>About Me</h1>
        <p>
            Hi, I'm Dan. I'm a senior at Ball State University majoring in Computer Science.
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
        <p className='about-links'>
            <a className='link' href='/resume.pdf' download="Resume_Chepkwony">
                Download my resume
            </a>
            <a className='link' href="mailto: dan.k.chepkwony@gmail.com">
                Email me
            </a>
        </p>
    </section>
)};
 
export default About;