import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.scss';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import {
  Route,
  useLocation
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import ThemeContextProvider from './context/Theme';
import projects from './assets/projects.json';
import ScrollToTop from './ScrollToTop';
import Home from './pages/home/Home';
import Project from './pages/project/Project';

const routes = [];

Object.keys(projects).map((page) => routes.push({path: '/' + page, project: page}))

const App = () => {
  const location = useLocation();
  const [hoverable, setHoverable] = useState(true);
  const circleContainer = useRef(null);
  const circle = useRef(null);
  const circle2 = useRef(null);

  //Firebase Analytics
  //Not a security risk https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public

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

  //Mouse Icon Animations

  const growMouse = useCallback(() => {
    if(circle.current && circle2.current){
      circle.current.style.opacity = 0;
      circle2.current.style.opacity = .75;
      circle.current.style.transform = 'scale(1.25)';
      circle2.current.style.transform = 'scale(1.5)';
    }
  }, [circle, circle2])

  const shrinkMouse = useCallback(() => {
    if(circle.current && circle2.current){
      circle.current.style.opacity = 1;
      circle2.current.style.opacity = 0;
      circle.current.style.transform = 'scale(1)';
      circle2.current.style.transform = 'scale(1)';
    }
  }, [circle, circle2])

  //Mouse Events

  useEffect(() => {
    var arrow = document.getElementById('arrow');
    if(arrow){
      arrow.style.opacity = 100 - (document.documentElement.scrollTop) + "%";
      setHoverable(document.documentElement.scrollTop < 100);
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      shrinkMouse();
    }, 200)
  }, [location, shrinkMouse]);

  useEffect(() => {
    var xMousePos = 0;
    var yMousePos = 0;
    
    const setIconPos = () => {
      circleContainer.current.style.transform = 'translate3d(' + xMousePos + 'px ,' + yMousePos + '%, 0)';
    }

    const onMove = (e) => {
      xMousePos = e.pageX;
      yMousePos = (e.pageY - document.documentElement.scrollTop) / window.innerHeight * 100;
      if(circle.current && circle2.current){
        setIconPos();
      }
    }

    const links = document.getElementsByClassName('link');

    if (!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(Firefox)|(Safari)/i) || navigator.userAgent.match(/Chrome/i)){
      document.addEventListener('mousemove', onMove);
      for (var link of links) {
        link.addEventListener("mouseenter", growMouse);
        link.addEventListener("mouseleave", shrinkMouse);
      }
    }
    else{
      document.documentElement.style.cursor = "auto";
      for (var linkNormal of links) {
        linkNormal.style.cursor = "pointer";
      }
    }
  }, [location, growMouse, shrinkMouse])

  useEffect(() => {
    const arrow = document.getElementById('arrow');
    if(arrow){
      if (!hoverable) {
        setTimeout(() => {
          arrow.removeEventListener("mouseenter", growMouse);
          arrow.removeEventListener("mouseout", shrinkMouse);
        }, 200)
      }
      else{
          arrow.addEventListener("mouseenter", growMouse);
          arrow.addEventListener("mouseout", shrinkMouse);
      }
    }
  }, [location, hoverable, growMouse, shrinkMouse])

  return (
    <>
      <ThemeContextProvider>
        <ScrollToTop />
        <div className='circle-container' ref={circleContainer}>
          <i id="circle" ref={circle} />
          <i id="circle2" ref={circle2} />
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
                <Home hoverable={hoverable} setHoverable={(v) => setHoverable(v)} />
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
        </div>
      </ThemeContextProvider>
    </>
   )
};



export default App;
