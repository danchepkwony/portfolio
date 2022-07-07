import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import projects from '../../assets/projects.json';

import './Home.scss';

import arrow from '../../assets/images/arrow.svg';
import codepen from '../../assets/images/codepen.svg';
import devpost from '../../assets/images/devpost.svg';
import github from '../../assets/images/github.svg';

const Home = () => {
  useEffect(() => {
    var arrow = document.getElementById('arrow');

    const fadeArrow = () => {
       arrow.style.opacity = 100 - (document.documentElement.scrollTop) + "%"
    }

    document.addEventListener('scroll', fadeArrow)

    return(() => {document.removeEventListener('scroll', fadeArrow)})
  }, [])

  return (
    <>
     <Helmet>
        <title>Dan Chepkwony</title>
        <meta name="description" content="Software Developer" />
    </Helmet>
      <main className='home'>
        <div className='down-container'>
          <img id='arrow' src={arrow} alt=''></img>
        </div>
        <section>
          <div className="sub spaced">Software Developer</div>
          <h1 className='name spaced'>Dan Chepkwony</h1>
          <ul className="project-list">
              {Object.keys(projects).map((page) => 
                <li key={page} className="project-list-item">
                    <h2><Link to={"/" + page} className='link project-list-links spaced'>{projects[page].title}</Link></h2>
                </li>)}
          </ul>
        </section>
        <section className='about'>
          <h1 className='spaced'>About Me</h1>
            <p>
                Hi, I'm Dan. I'm a rising senior at Ball State University majoring in Computer Science.
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
        <footer>
          <div>
            <a href="https://codepen.io/danchepkwony" target="_blank" rel="noopener noreferrer">
              <img className='link' src={codepen} alt="codepen"/>
            </a>
            <a href="https://devpost.com/danchepkwony" target="_blank" rel="noopener noreferrer">
              <img className='link' src={devpost} alt="devpost"/>
            </a>
            <a href="https://github.com/danchepkwony" target="_blank" rel="noopener noreferrer">
              <img className='link' src={github} alt="github"/>
            </a>
          </div>
        </footer>
      </main>
     </>
  )
}
 
export default Home;