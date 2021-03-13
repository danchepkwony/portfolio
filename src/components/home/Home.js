import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { withRouter } from 'react-router';
import headshot from '../images/headshot.jpg';
import shapes from '../images/shapes.png';
import communicaid from '../images/communicaid-mockup.png';
import statusboard from '../images/statusboard.png';
import arrow from '../images/arrows.png';
import './Home.css';

const HomePage = (props) => {
  const { ref, inView } = useInView({
    threshold: .25,
  });

  useEffect(() => {
    var headshot = document.getElementById("headshot");
    if(inView && !headshot.classList.contains("appear")){
      headshot.classList.add("appear");
    }
  }, [inView])

  const onSlideChange = (percent) => {
    var slideshow = document.getElementById("slideshow");
    slideshow.style.right = percent;
  }

  const transitionNav = (e, link) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        props.history.push('/portfolio/' + link);
    },800)
  }

  const desktopSlideshow = (
        //TODO: Clean this
        <div id = "slideshow" className = "slideshow">
          <div className="slideshow_project first_project">
            <NavLink to='/portfolio/communicaid' className = "project" onClick={e => {transitionNav(e, 'communicaid')}}>
              <img className = "project_image" src={communicaid} alt="Example Project"></img>
              <h2 className = "project_title">Communicaid</h2>
            </NavLink>
            <div className = "container">
              <img className = "next_arrow" src={arrow} alt="Next Project" onClick={() => onSlideChange("100%")}></img>
            </div>
          </div>
          <div className="slideshow_project middle_project">
            <div className = "container container_middle flip">
              <img className = "next_arrow" src={arrow} alt="Next Project" onClick={() => onSlideChange("0%")}></img>
            </div>
            <NavLink to='/portfolio/status-board' className = "project project_middle" onClick={e => {transitionNav(e, 'status-board')}}>
              <img className = "project_image" src={statusboard} alt="Status Board"></img>
              <h2 className = "project_title">Status Board</h2>
            </NavLink>
            <div className = "container container_middle">
              <img className = "next_arrow" src={arrow} alt="Next Project" onClick={() => onSlideChange("200%")}></img>
            </div>
          </div>
          <div className="slideshow_project final_project">
            <div className = "container flip">
              <img className = "next_arrow" src={arrow} alt="Next Project" onClick={() => onSlideChange("100%")}></img>
            </div>
            <div className = "full_portfolio">
              <NavLink to='/portfolio' className = "text" onClick={e => {transitionNav(e, '')}}> Full Portfolio</NavLink>
            </div>
          </div>
        </div>)

  const mobileSlideshow = (
        <div className = "mobile_slideshow">
          <div className = "full_portfolio">
            <NavLink to='/portfolio' className = "text"> View Portfolio</NavLink>
          </div>
        </div>)

  return (
    <div className = "Home">
      <div className = "Intro">
        <div className = "text">
          <h1 className = "name">
            DAN<br/>
            CHEPKWONY
          </h1>
          <p className = "description">
            Junior Full-stack Developer
          </p>
        </div>
        {props.wideEnough && 
        <div className = "shapes">
            <img src={shapes} alt="" />
        </div> }
      </div>
      <div className = "Work">
        {props.wideEnough ? desktopSlideshow : mobileSlideshow }
      </div>
      <div className = "Self">
        <div className = "container" ref={ref}>
          <img src={headshot} id = "headshot" className = "headshot" alt="Headshot of Dan Chepkwony"  />
        </div>
        <div className = "info">  
          <h2 className = "hi">HI, I'M DAN</h2>
          <p className = "about-me">
              I'm a sophomore at Ball State University majoring in Computer Science.
              I take interest in mobile, web, and software development as well as design, education, and accessibility.
              Also, I love cats.
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default withRouter(HomePage);