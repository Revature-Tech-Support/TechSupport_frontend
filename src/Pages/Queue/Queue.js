import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import axios from 'axios';

const Queue = () => {

  const [ticketState, setTicketState] = useState({
    ticket: '',
    tickets: [],
    startChat: '',
    deleteTicket: ''
  })

  ticketState.startChat = (event) => {
    console.log(event)
      let openChat = window.confirm("This will open a chat with the corresponding client. Proceed?")
      if (openChat) {
        window.location = "/chat"
    }
    // if (ticketState.ticket.id === "ticketId") {
    //   let openChat = window.confirm("This will open a chat with the corresponding client. Proceed?")
    //   if (openChat) {
    //   window.location = "/chat"
    //   }
    // } 
  };

  ticketState.deleteTicket = id => {
    console.log(id)
      let removeTicket = window.confirm("This will remove the ticket from the queue list. Proceed?")
      if (removeTicket) {
        axios.delete(`/tickets/${id}`)
          .then(() => {
            const tickets = JSON.parse(JSON.stringify(ticketState.tickets))
            const ticketsFiltered = tickets.filter(ticket => ticket._id !== id)
            setTicketState({ ...ticketState, tickets: ticketsFiltered })
          })
          .catch(err => console.error(err))
      }
    
    // if (ticketState.ticket.id === "id") {
    //   let removeTicket = window.confirm("This will remove the ticket from the queue list. Proceed?")
    //   if (removeTicket) {
    //     axios.delete(`/tickets/${id}`) 
    //       .then(() => {
    //       const tickets = JSON.parse(JSON.stringify(ticketState.tickets))
    //       const ticketsFiltered = tickets.filter(ticket => ticket._id !== id)
    //       setTicketState({ ...ticketState, tickets: ticketsFiltered })
    //     })
    //   .catch (err => console.error(err))
    //     }
    //   }
    }


  return (
    <>
    <Navbar />
    <div className="jumbotron">
      <h1 className="display-4">Welcome to back to work!</h1>
      <p className="lead"><b>Remember the golden question:</b> Have you tried turning it off and on again?</p>
      <p className="lead"></p>
      <hr className="my-4" />
    </div>
    <div className="container">
      <h2>QUEUE TABLE</h2>
      <table className="table table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID #</th>
            <th scope="col">Username</th>
            <th scope="col">Minutes Waiting</th>
            <th scope="col">Issue</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cockroach Team</td>
            <td>4</td>
            <td>Won't die</td>
            <td><a onClick={event => ticketState.startChat(event)}>Start chat</a></td>
            <td><a onClick={event => ticketState.deleteTicket(event)}>Delete</a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dev-Ops</td>
            <td>3</td>
            <td>No code to test/document</td>
            <td><a href="#">Start chat</a></td>
            <td><a href="#">Delete</a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Front-end</td>
            <td>2</td>
            <td>React is hard</td>
            <td><a href="#">Start chat</a></td>
            <td><a href="#">Delete</a></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Comms</td>
            <td>1</td>
            <td>Communication is hard</td>
            <td><a href="#">Start chat</a></td>
            <td><a href="#">Delete</a></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Files and Transcripts</td>
            <td>1</td>
            <td>How do we even do this?</td>
            <td><a href="#">Start chat</a></td>
            <td><a href="#">Delete</a></td>
          </tr>
        </tbody>
      </table>
      </div>
    <Footer />
    </>
  )
}

export default Queue