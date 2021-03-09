import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { withRouter } from 'react-router'
import example from '../images/project_placeholder.png';
import headshot from '../images/headshot.jpg';
import shapes from '../images/shapes.png';
import communicaid from '../images/communicaid-mockup.png';
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

  const onBackSlide = () => {
    //setCurrentSlide((currentSlide == 3) ? 1 : currentSlide + 1);
    var slideshow = document.getElementById("slideshow");
    slideshow.style.right = "0%";
  }

  const onNextSlide = () => {
    //setCurrentSlide((currentSlide == 3) ? 1 : currentSlide + 1);
    var slideshow = document.getElementById("slideshow");
    slideshow.style.right = "100%";
  }

  const onBackFinalSlide = () => {
    //setCurrentSlide((currentSlide == 3) ? 1 : currentSlide + 1);
    var slideshow = document.getElementById("slideshow");
    slideshow.style.right = "100%";
  }

  const onFinalSlide = () => {
    //setCurrentSlide((currentSlide == 3) ? 1 : currentSlide + 1);
    var slideshow = document.getElementById("slideshow");
    slideshow.style.right = "200%";
  }

  const transitionNav = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        props.history.push('/portfolio/communicaid');
    },800)
  }

  const desktopSlideshow = (
        //TODO: Create Slideshow Project Component and iterate between them programatically
        <div id = "slideshow" className = "slideshow">
          <div className="slideshow_project first_project">
            <NavLink to='/portfolio/communicaid' className = "project" onClick={e => {transitionNav(e)}}>
              <img className = "project_image" src={communicaid} alt="Example Project"></img>
              <h2 className = "project_title">Communicaid</h2>
            </NavLink>
            <div className = "container">
              <img className = "next_arrow" src={arrow} alt="Next Project" onClick={onNextSlide}></img>
            </div>
          </div>
          <div className="slideshow_project middle_project">
            <div className = "container container_middle flip">
              <img className = "next_arrow" src={arrow} alt="Next Project"onClick={onBackSlide}></img>
            </div>
            <NavLink to='/portfolio/status-board' className = "project project_middle">
              <img className = "project_image" src={example} alt="Status Board"></img>
              <h2 className = "project_title">Status Board</h2>
            </NavLink>
            <div className = "container container_middle">
              <img className = "next_arrow" src={arrow} alt="Next Project"onClick={onFinalSlide}></img>
            </div>
          </div>
          <div className="slideshow_project final_project">
            <div className = "container flip">
              <img className = "next_arrow" src={arrow} alt="Next Project"onClick={onBackFinalSlide}></img>
            </div>
            <div className = "full_portfolio">
              <NavLink to='/portfolio' className = "text">Full Portfolio</NavLink>
            </div>
          </div>
        </div>)

  const mobileSlideshow = (<div></div>)

  return (
    <div className = "Home">
      <div className = "Intro">
        <div className = "text">
          <h1 className = "name">
            DAN<br/>
            CHEPKWONY
          </h1>
          <p className = "description">
            Junior Software Developer
          </p>
        </div>
        {props.wideEnough && 
        <div className = "shapes">
            <img src={shapes} alt="shapes" />
        </div> }
      </div>
      <div className = "Work">
        {props.wideEnough ? desktopSlideshow : mobileSlideshow }
      </div>
      <div className = "Self">
        <div className = "container" ref={ref}>
          <img src={headshot} id = "headshot" className = "headshot" alt="Headshot of me"  />
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