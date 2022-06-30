import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
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

Object.keys(projects).map((page) => routes.push({path: '/' + page, project: page, Component: Project}))

const App = () => {
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

  return ( 
    <Router>
      <ScrollToTop />
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
        {routes.map(({ path, project, Component }) => (
          <Route key={path} path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames='projects'
                unmountOnExit
                appear
              >
                <Component page={project}/>
              </CSSTransition>
          )}
          </Route>
        ))}
        {/*  */}
        <Redirect from="/portfolio" to="/"/>
      </div>
    </Router>)
};


 
export default App;