import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioFooter = () => (
    <>
        <div className='portfolioFooter'>
            <NavLink to="/projects/digital-corps" activeClassName='active'>Digital Corps</NavLink>
            <NavLink to="/projects/muncie-afghan" activeClassName='active'>Muncie Afghan Refugee</NavLink>
            <NavLink to="/projects/sportslink" activeClassName='active'>Sportslink</NavLink>
            <NavLink to="/projects/status-board" activeClassName='active'>Status Board</NavLink>
        </div>
    </>
   
)
 
export default PortfolioFooter;