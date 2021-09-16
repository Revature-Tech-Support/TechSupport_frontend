import React from 'react'; 
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const History = () => {
  return (
    <>
    <Navbar />
      <div className='jumbotron'>
        <h1 className='display-4'>Welcome to the transaction history page!</h1>
        <p className='lead'>A good place to take a walk down memory lane...or just to find out where you did the last time this issue came up.</p>
        <p className='lead'></p>
        <hr className='my-4' />
      </div>

      <div className='container'>
        {/*<h2>Client: {data.username}</h2>
        <h3>Issue #: {data.ticketId}</h3>
          <h3>Subject: {data.subject}</h3> 
          <h3>Transcript: {data.transcripts}</h3>*/}
      <div className='card text-white bg-primary mb-3' style={{ maxWidth: '18rem'}}>
        <div className='card-header'>Issue # 4</div>
        <div className='card-body'>
          <h5 className='card-title'>Client: Cockroach Team</h5>
          <h5 class='card-text'>Subject: Won't die</h5>
          
        </div>
      </div>
      <div className="sheet">
        <h2>Transcript:</h2>
        <p><b>Agent:</b> Hello, we read about your issue and its details. Is there anything you would like to add?</p>
        <p><b>Cockroach Team:</b> Yeah! We're getting shuffled around more than a deck of cards at a blackjack table!</p>
        <p><b>Agent:</b> ...</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default History;