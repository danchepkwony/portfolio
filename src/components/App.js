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
import images from './images/allimages';

const App = () => {
  const [wideEnough, setWideEnough] = useState(window.innerWidth > 992);

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () =>
          {resolve(image); console.log('working')};
        loadImg.onerror = err => reject(err);
      })
    }

    Promise.all(images.map(image => loadImage(image)))
      .catch(err => console.log("Failed to load images", err))

    window.addEventListener("resize", updateProjects); 
    return () => {window.removeEventListener("resize", updateProjects)};
  });
  
  const updateProjects = throttle(() => {
    setWideEnough(window.innerWidth > 992);
  }, 100);

  // const routes = (
  //   '/', '/portfolio', '/contact'
  // );

  // function hashLinkScroll() {
  //   const { hash } = window.location;
  //   if (hash !== '') {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) element.scrollIntoView();
  //     }, 0);
  //   }
  // }


  // routes={routes}
  // onUpdate={hashLinkScroll}>

  return(
      <Router>
      <ScrollToTop />
      <Navigation wideEnough={wideEnough}/>
      <Switch>
        <Route exact path='/' component={() => <HomePage wideEnough={wideEnough}/>} />
        <Route exact path='/portfolio' component={() => <PortfolioPage wideEnough={wideEnough}/>}/>
          <Route exact path='/portfolio/communicaid' component={() => <PortfolioPage wideEnough={wideEnough} project="communicaid"/>}/>
          <Route exact path='/portfolio/health-radar' component={() => <PortfolioPage wideEnough={wideEnough} project="healthradar"/>}/>
          <Route exact path='/portfolio/dashboard' component={() => <PortfolioPage wideEnough={wideEnough} project="dashboard"/>}/>
          <Route exact path='/portfolio/status-board' component={() => <PortfolioPage wideEnough={wideEnough} project="statusboard"/>}/>
        <Route path='/contact' component={() => <ContactPage wideEnough={wideEnough}/>} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </Router>
  )
};


 
export default App;