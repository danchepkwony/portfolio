import React from 'react';
import { withRouter } from 'react-router';
import Footer from '../PortfolioFooter';
import bot from '../../../assets/images/statusboard.png';
import code from '../../../assets/images/portfolio_status.png';

const StatusBoard = () => (
    <>
    <main className='portfolio'>
      <h1>Status Board Slack App</h1>
      <ul>
        <li>Azure Functions</li>
        <li>C#</li>
        <li>MySQL</li>
      </ul>
      <div>
        <section>
          <p>
            When the Digital Corps went remote, we needed a way to keep track of
            which employees/staff were on and off the clock. Our staff set up the database,
            deployed the functions, and created the frontend display. I worked on the Azure Functions
            with C# and fetched data from our MySQL database. 
          </p>
          <img src={code} alt="Clocking out Azure Function"/>
        </section>
        <section>
          <p>
            In order to write the functions, I had to research how to create slash commands for a Slackbot,
            how to direct that slash command to Azure, and how to parse and send that data to our frontend.
            I followed some tutorials and created example Slackbots before working on the final one.
          </p>
          <img src={bot} alt="Status Board Slackbot"/>
        </section>
      </div>
    </main>
    <Footer />
    </>
)
 
export default withRouter(StatusBoard);