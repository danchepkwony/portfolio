import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
 
import Navigation from './Navigation';
import MainPage from './Start';
import PortfolioPage from './Portfolio';
import MeetPage from './Meet';

 
const App = () => (
    <Router>
    <div>
    <Navigation />
      <Route exact path='/' component={MainPage} />
      <Route path='/portfolio' component={PortfolioPage} />
      <Route path='/say-hi' component={MeetPage} />
    </div>
  </Router>
);
 
export default App;