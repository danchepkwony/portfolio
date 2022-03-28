import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navigation from './navigation/Navigation';
import HomePage from './home/Home';
import AboutPage from './about/About';
import ResumePage from './resume/Resume';
import MuncieAfghan from './portfolio/muncieAfghan/MuncieAfghan';
import DigitalCorps from './portfolio/digitalcorps/DigitalCorps';
import Sportslink from './portfolio/sportslink/Sportslink';
import StatusBoard from './portfolio/statusboard/StatusBoard';
import Footer from './footer/Footer';

import '../components/portfolio/Portfolio.scss';

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

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
      <Navigation/>
      <Switch>
        <Route exact path='/projects' component={HomePage} />
          <Route path='/projects/muncie-afghan' component={MuncieAfghan} />
          <Route path='/projects/digital-corps' component={DigitalCorps} />
          <Route path='/projects/sportslink' component={Sportslink} />
          <Route path='/projects/status-board' component={StatusBoard} />
        <Route path='/aboutme' component={AboutPage} />
        <Route path='/resume' component={ResumePage} />
        <Redirect from='*' to='/projects' />
      </Switch>
      <Footer />
    </Router>)
};


 
export default App;