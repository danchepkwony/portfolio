import React from 'react';
import { withRouter } from 'react-router';
import Footer from '../PortfolioFooter';
import code from '../../../assets/images/portfolio_sportslink1.png';
import form from '../../../assets/images/portfolio_sportslink2.png';

const Sportslink = () => (
    <>
    <main className='portfolio'>
      <h1>SportsLink Application Form</h1>
      <ul>
        <li>React Javascript</li>
        <li>Azure Functions</li>
        <li>C#</li>
      </ul>
      <div>
        <section>
          <p>
            <a href="https://ballstatesportslink.com/new-application-page/" target="_blank" rel="noopener noreferrer">
              Sportslink at Ball State University needed a new application form 
            </a>
            {' '}
            and a better way to keep track of the applications they received.
            We decided to create a Google Sheet with some conditional logic so the
            Sportslink staff could filter through applicants easily and wouldn't need
            future support.
          </p>
          <img src={code} alt="Code for Blob Storage Handler" />
        </section>
        <section>
          <p>
            After getting guidance from the staff on how to format the Google Sheet,
            I created a Google Form, connected it to the Google Sheet, and created
            an Azure Function that would store any files they submitted to Blob Storage
            then post the link and other fields to the Google Form.
            Then, I used React Javascript to write the basic functionality for the frontend.
          </p>
          <img src={form} alt="Google Form for the application"/>
        </section>
      </div>
    </main>
    <Footer />
    </>
)

export default withRouter(Sportslink);