import React from 'react'; 
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import axios from 'axios';

const History = (props) => {

  const retrieveTranscript = () => {
    props.retrieveHistory([])
    axios.get(`/tickets/${props.id}`)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }

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
        {/*<h2>Issue # {props.ticketId}</h2>
        <h3>Client: {props.username}</h3>
        <h3>Subject: {props.subject}</h3>
        <hr />
        //Transcript to go here */}
      <div className='sheet'>
        <div className='card-header'>Issue # 4</div>
        <h5>Client: Cockroach Team</h5>
        <h5>Subject: Won't die</h5>
        <hr />
        <h4>Transcript</h4>
        <p><b>Agent:</b> Hello, we read about your issue and its details. Is there anything you would like to add?</p>
        <p><b>Cockroach Team:</b> Yeah! We're getting shuffled around more than a deck of cards at a blackjack table!</p>
        <p><b>Agent:</b> ...</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default History;