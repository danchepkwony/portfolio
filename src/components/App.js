import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import throttle from "lodash.throttle";
import ScrollToTop from './ScrollToTop';
import Navigation from './navigation/Navigation';
import HomePage from './home/Home';
import PortfolioPage from './portfolio/Portfolio';
import ContactPage from './contact/Contact';
import Footer from './footer/Footer';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const App = () => {
  const [wideEnough, setWideEnough] = useState(window.innerWidth > 992);

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

  useEffect(() => {
    window.addEventListener("resize", updateProjects); 
    return () => {window.removeEventListener("resize", updateProjects)};
  });
  
  const updateProjects = throttle(() => {
    setWideEnough(window.innerWidth > 992);
  }, 100);

  return ( 
      <Router>
      <ScrollToTop />
      <Navigation wideEnough={wideEnough}/>
      <Switch>
        <Route exact path='/' component={() => <HomePage wideEnough={wideEnough}/>} />
        <Route exact path='/portfolio' component={() => <PortfolioPage wideEnough={wideEnough}/>}/>
          <Route exact path='/portfolio/lsamp-research' component={() => <PortfolioPage wideEnough={wideEnough} project="lsampResearch"/>}/>
          <Route exact path='/portfolio/communicaid' component={() => <PortfolioPage wideEnough={wideEnough} project="communicaid"/>}/>
          <Route exact path='/portfolio/health-radar' component={() => <PortfolioPage wideEnough={wideEnough} project="healthradar"/>}/>
          <Route exact path='/portfolio/dashboard' component={() => <PortfolioPage wideEnough={wideEnough} project="dashboard"/>}/>
          <Route exact path='/portfolio/status-board' component={() => <PortfolioPage wideEnough={wideEnough} project="statusboard"/>}/>
        <Route path='/contact' component={() => <ContactPage wideEnough={wideEnough}/>} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </Router>)
};


 
export default App;