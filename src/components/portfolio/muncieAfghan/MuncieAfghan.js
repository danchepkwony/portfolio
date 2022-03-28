import React from 'react';
import { withRouter } from 'react-router';
import Footer from '../PortfolioFooter';
import muncieAfghan from '../../../assets/images/muncieafghan.png';

const MuncieAfghan = () => (
    <>
      <main className='portfolio'>
        <h1>Muncie Afghan Refugee Website</h1>
        <ul>
          <li>React TypeScript</li>
          <li>CSS</li>
        </ul>
        <div>
          <section>
            <p>
            <a href="https://www.awakeninc.org" target="_blank" rel="noopener noreferrer">The Afghan Women's And Kids' Education and Necessities Organization (AWAKEN) 
              needed a website</a> in the midst of the Afghanistan Refugee Crisis in 2021.
              The Digital Corps had students volunteer to help build their website.
              I worked on the About page with React Typescript and CSS.
            </p>
            <img src={muncieAfghan} alt="AWAKEN Website"/>
          </section>
        </div>
      </main>
      <Footer />
    </>
)
 
export default withRouter(MuncieAfghan);