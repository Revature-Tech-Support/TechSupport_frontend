import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import axios from 'axios';

const Queue = () => {

  const [queueState, setQueueState] = useState([])

  const startChat = event => {
    console.log(event)
    // if (queueState.ticket.id === "ticketId") {
      let openChat = window.confirm("This will open a chat with the corresponding client. Proceed?")
      if (openChat) {
        window.location = "/chat"
    }
  };

  const deleteTicket = id => {
    console.log(id)
    // if (queueState.ticket.id === "id") {
      let removeTicket = window.confirm("This will remove the ticket from the queue list. Proceed?")
      if (removeTicket) {
        axios.delete(`/tickets/${id}`)
          .then(() => {
            const queue = JSON.parse(JSON.stringify(queueState.tickets))
            const queueFiltered = queue.filter(ticket => ticket._id !== id)
            setQueueState({ ...queueState, queue: queueFiltered })
          })
          .catch(err => console.error(err))
      }
    }

  const retrieveHistory = id => {
    console.log(id)
    axios.get(`/tickets/${id}`)
      .then(() => {
        
      })
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
          {/* <tr>
            <th scope="row">${data.placeInQueue}</th>
            <td>${data.username}</td>
            <td>${data.minutesWaiting}</td>
            <td>${data.subject}</td>
            <td><a onClick={event => queueState.startChat(event)}>Start chat</a></td>
            <td><a onClick={event => queueState.deleteTicket(event)}>Delete</a></td>
          </tr> */}
          <tr>
            <th scope="row">1</th>
            <td>Cockroach Team</td>
            <td>4</td>
            <td>Won't die</td>
            <td><a onClick={event => queueState.startChat(event)}>Start chat</a></td>
            <td><a onClick={event => queueState.deleteTicket(event)}>Delete</a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dev-Ops</td>
            <td>3</td>
            <td>No code to test/document</td>
            <td><a onClick={event => queueState.startChat(event)}>Start chat</a></td>
            <td><a onClick={event => queueState.deleteTicket(event)}>Delete</a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Front-end</td>
            <td>2</td>
            <td>React is hard</td>
            <td><a onClick={event => queueState.startChat(event)}>Start chat</a></td>
            <td><a onClick={event => queueState.deleteTicket(event)}>Delete</a></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Comms</td>
            <td>1</td>
            <td>Communication is hard</td>
            <td><a onClick={event => queueState.startChat(event)}>Start chat</a></td>
            <td><a onClick={event => queueState.deleteTicket(event)}>Delete</a></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Files and Transcripts</td>
            <td>1</td>
            <td>How do we even do this?</td>
            <td><a onClick={event => queueState.startChat(event)}>Start chat</a></td>
            <td><a onClick={event => queueState.deleteTicket(event)}>Delete</a></td>
          </tr>
        </tbody>
      </table>
      </div>
    <Footer />
    </>
  )
}

export default Queue