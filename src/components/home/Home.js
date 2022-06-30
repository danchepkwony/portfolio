import React, {useState, useEffect, useRef} from 'react';
import { isMobile } from 'react-device-detect';

import './Home.scss';
import ProjectList from '../projectList/ProjectList';
import About from '../about/About';
import AnimalCrossing from '../spline/Spline';

const Home = () => {
  const [section, setSection] = useState(<>Here's <span id="blur">some stuff I've done</span></>)
  const containerRef = useRef(null)

  //"Here's..." blur effect
  const blurTransition = () => {
    var blurElem = document.getElementById('blur');
    if(blurElem){
      blurElem.classList.remove('blur');
      setTimeout(function () {
        blurElem.classList.add('blur');
      }, 50)
    }
  }

  //Intersection Observer for about section
  useEffect(() => {
    const options = {root: null, rootMargin: "0px", threshold:.75}
    const callbackFunction = (entries) => {
      const [ entry ] = entries
      entry.isIntersecting && !isMobile ? setSection(<>Here's <span id="blur">more about me</span></>) : setSection(<>Here's <span id="blur">some stuff I've done</span></>)
      blurTransition();
    }

    const observer = new IntersectionObserver(callbackFunction, options)
    const reference = containerRef.current;
    if (reference) observer.observe(reference)
    blurTransition();

    return () => {
      if(reference) observer.unobserve(reference)
    }
  }, [containerRef])
    
  return (
    <main>
      <div className="home">
        <div className='left'>
          <div className='text'>
            <div className="sub">Hi, I'm</div>
            <h1>Dan Chepkwony</h1>
            <p>{section}</p>
          </div>
          {
          //Bulky; shouldn't load on mobile
          !isMobile && <AnimalCrossing />
          }
        </div>
        <div className='right'>
          <ProjectList/>
          <div ref={containerRef}>
            <About />
          </div>
        </div>
      </div>
    </main>
  )
}
 
export default Home;