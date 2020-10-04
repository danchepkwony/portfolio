import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
 
import Navigation from './Navigation';
import HomePage from './Home';
import PortfolioPage from './Portfolio';
import ContactPage from './Contact';

 
const App = () => (
    <Router>
    <Navigation />
      <Route exact path='/' component={HomePage} />
      <Route path='/portfolio' component={PortfolioPage} />
      <Route path='/say-hi' component={ContactPage} />
  </Router>
);
 
export default App;