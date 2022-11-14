import React from 'react';
import { withRouter } from "react-router";
import './Home.scss';
import Landing from '../../components/landing/Landing';
import ProjectList from '../../components/projectList/ProjectList';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';


const Home = (props) => {

  return (
    <>
      <main className='home'>
        <Header/>
        <Landing hoverable={props.hoverable} setHoverable={props.setHoverable}/>
        <ProjectList />
        <About/>
        <Footer/>
      </main>
     </>
  )
}
 
export default withRouter(Home);