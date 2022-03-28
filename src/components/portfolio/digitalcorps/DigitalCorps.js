import React from 'react';
import { withRouter } from 'react-router';
import Footer from '../PortfolioFooter';
import contact from '../../../assets/images/portfolio_digital1.png';
import cpt from '../../../assets/images/portfolio_digital2.png';

const DigitalCorps = () => (
    <>
      <main className='portfolio'>
        <h1>Digital Corps Website Bug Fixes</h1>
        <ul>
          <li>Wordpress</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>CSS</li>
        </ul>
        <div>
          <section>
            <p>
              I work at The Digital Corps, an agency under Ball State University's Office of Information Technology. {' '}
              <a href="https://digitalcorps.bsu.edu/" target="_blank" rel="noopener noreferrer">The Digital Corps' website</a> needed some animations and bug tweaks, so I worked with the UX team to fix them.
              After the UX team researched the best animations speeds and did an audit of the site, 
              another developer and I implemented those changes and fixed the bugs using JavaScript, JQuery, and CSS.
              I also tweaked some styling throughout the site and added the contact functionality.
            </p>
            <img src={contact} alt='Contact Form'/>
          </section>
          <section>
            <p>
              Then, we decided to migrate some of the content from hard-coded HTML documents to Custom Post Types
              so the Communications team could easily edit them in the future. With the help of another developer, I changed the projects and staff pages to 
              Custom Posts using PHP. 
            </p>
            <img src={cpt} alt='Wordpress Custom Post Types'/>
          </section>
        </div>
      </main>
    <Footer />
    </>
)
 
export default withRouter(DigitalCorps);