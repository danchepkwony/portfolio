import React, {useEffect} from 'react';
import {
  Route,
  useLocation,
  Redirect
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import Home from './home/Home';
import Project from './project/Project';
import ScrollToTop from './ScrollToTop';
import projects from '../assets/projects.json';
import './App.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const routes = []
Object.keys(projects).map((page) => routes.push({path: '/' + page, project: page}))

const App = () => {
  const location = useLocation();

  const firebaseConfig = {
    apiKey: "AIzaSyCaP92eoq4bEjfQzxZ26azC8IWJ970HiWU",
    authDomain: "portfolio2-47919.firebaseapp.com",
    databaseURL: "https://portfolio2-47919.firebaseio.com",
    projectId: "portfolio2-47919",
    storageBucket: "portfolio2-47919.appspot.com",
    messagingSenderId: "572088866809",
    appId: "1:572088866809:web:cdb5d225cffe14baa90f28",
    measurementId: "G-250B7QK8NR"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  logEvent(analytics, 'notification_received');

  //Mouse Events
  useEffect(() => {
    var xMousePos = 0;
    var yMousePos = 0;
    var circle = document.getElementById('circle');
    var circle2 = document.getElementById('circle2');
    var aboutSection = document.getElementsByClassName('about')[0];
    console.log(aboutSection);
    circle.style.opacity = 1; 
    circle2.style.opacity = 0; 
    circle.style.transform = 'translate(-36.5%,-36.5%) scale(1)'; 
    circle2.style.transform = 'translate(-25%,-25%) scale(1)';

    const setIconPos = () => {
      circle.style.left = xMousePos + 'px';
      circle.style.top = yMousePos + '%';
      circle2.style.left = xMousePos + 'px';
      circle2.style.top = yMousePos + '%';

      // Tried to use transform to be more performant, but that was unnecessarily complicated
      // circle.style.transform =  "scale(" + scale + ") translate(calc(" + xMousePos + "px - 36.5%), calc(" + yMousePos + 'vh - 36.5%))';
      // circle.style.webkitTransform =  "scale(" + scale + ") translate(calc(" + xMousePos + "px - 36.5%), calc(" + yMousePos + 'vh - 36.5%))';
      // circle2.style.transform =  "scale(" + scale + ") translate(calc(" + xMousePos + "px - 25%), calc(" + yMousePos + 'vh - 25%))';
      // circle2.style.webkitTransform =  "scale(" + scale + ") translate(calc(" + xMousePos + "px - 25%), calc(" + yMousePos + 'vh - 25%))';
    }

    const checkForSection = () => {
      if(aboutSection){
        if(aboutSection.getBoundingClientRect().top !== 0 && (aboutSection.getBoundingClientRect().top / window.innerHeight * 100) < yMousePos){
          circle.style.borderColor = 'white';
        }
        else{
          circle.style.borderColor = 'black';
        }
      }
    }

    const onMove = (e) => {
      xMousePos = e.pageX;
      yMousePos = (e.pageY - document.documentElement.scrollTop) / window.innerHeight * 100;
      setIconPos();
      checkForSection();
    }

    const growMouse = () => {
      circle.style.opacity = 0; 
      circle2.style.opacity = 1; 
      circle.style.transform = 'translate(-36.5%,-36.5%) scale(1.5)'; 
      circle2.style.transform = 'translate(-25%,-25%) scale(2)'; 
    }

    const shrinkMouse = () => {
      circle.style.opacity = 1; 
      circle2.style.opacity = 0; 
      circle.style.transform = 'translate(-36.5%,-36.5%) scale(1)'; 
      circle2.style.transform = 'translate(-25%,-25%) scale(1)'; 
    }

    if(!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)){
      document.addEventListener('mousemove', onMove)
      document.addEventListener('scroll', checkForSection)
      var links = document.getElementsByClassName('link');
      for(var link of links){
          link.addEventListener("mouseenter", growMouse)
          link.addEventListener("mouseout", shrinkMouse)
        }
    }

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.addEventListener('scroll', checkForSection)
      var links = document.getElementsByClassName('link')
      for(var link of links){
          link.removeEventListener("mouseenter", growMouse)
          link.removeEventListener("mouseout", shrinkMouse)
        }
    }
  }, [location])

  return ( 
    <>
      <ScrollToTop />
      <div className='circle-container'>
        <i id="circle"/>
        <i id="circle2"/>
      </div>
      <div className='app-container'>
        <Route exact path="/">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1000}
              classNames='home'
              unmountOnExit
              appear
            >
              <Home/>
            </CSSTransition>
        )}
        </Route>
        {routes.map(({ path, project }) => (
          <Route key={path} path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames='project'
                unmountOnExit
                appear
              >
                <Project page={project}/>
              </CSSTransition>
          )}
          </Route>
        ))}
        <Redirect from='/portfolio' to='/'/>
      </div>
    </>)
};


 
export default App;
