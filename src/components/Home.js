import React, { useRef, useState, useEffect} from 'react';
import './App.css'
import tearPrint from './images/tearprint.png';
import headShot from './images/iconboy2.png';


function HomePage() {

  //Gabe Ragland's useWindowSize hook

  // function useWindowSize() {
  //   // Initialize state with undefined width/height so server and client renders match
  //   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  //   const [windowSize, setWindowSize] = useState({
  //     width: undefined,
  //     height: undefined,
  //   });
  
  //   useEffect(() => {
  //     // Handler to call on window resize
  //     function handleResize() {
  //       // Set window width/height to state
  //       setWindowSize({
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       });
  //     }
      
  //     // Add event listener
  //     window.addEventListener("resize", handleResize);
      
  //     // Call handler right away so state gets updated with initial window size
  //     handleResize();
      
  //     // Remove event listener on cleanup
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []); // Empty array ensures that effect is only run on mount
  
  //   return windowSize;
  // }

  // const size = useWindowSize();
  // const page = useRef();
  // const img = useRef();

  // const skewConfigs = {
  //   ease: .1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0
  // }

  // useEffect(() => {
  //   document.body.style.height = '${scrollContainer.current.getBoundClientRect().height}px'
  // }, [size.height])

  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());
  // }, [])

  // const skewScrolling = () => {
  //   skewConfigs.current = window.scrollY;
  //   skewConfigs.previous += (skewConfigs.current = skewConfigs.previous) * skewConfigs.ease;
  //   skewConfigs.rounded = Math.round(skewConfigs.previous * 100)/100;

  //   const difference = skewConfigs.current - skewConfigs.rounded;
  //   const acceleration = difference/size.width;
  //   const skew = +acceleration + 7.5;

  //   img.current.style.transform = 'translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)';

  //   requestAnimationFrame(() => skewScrolling());
  // }
  

  // <img className = "Landing-work-images-first" src = {headShot} alt = 'Head Shot' />
  // <img className = "Landing-work-images-first" src = {headShot} alt = 'Head Shot' />
  // 

  return (
    <div>
      <div className = "Landing-about">
        <div>
          <div className = "Landing-about-info"> 
            <h1 className = "Landing-about-info-name">
              Dan Chepkwony
            </h1>
            <br />
            <h2 className = "Landing-about-info-text">
              A junior <span style={{fontWeight: "bold"}}>web developer</span> based in Indianapolis, Indiana
            </h2>
          </div>
        </div>
      </div>
      <div className = "Landing-work">
        <div className = "Landing-work-info">  
            Here's some stuff I've done
        </div>
        <div className = "Landing-work-examples">
          <p> this is where I would add stuff if I had stuff </p>
        </div>
      </div>
    </div>
  )
}
 
export default HomePage;