import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Queue = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <h2>QUEUE TABLE</h2>
      <table class="table table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Minutes Waiting</th>
            <th scope="col">Issue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cockroach Team</td>
            <td>4</td>
            <td>Won't die</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dev-Ops</td>
            <td>3</td>
            <td>No code to test/document</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Front-end</td>
            <td>2</td>
            <td>React is hard</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Comms</td>
            <td>1</td>
            <td>Communication is hard</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Files and Transcripts</td>
            <td>1</td>
            <td>How do we even do this?</td>
          </tr>
        </tbody>
      </table>
      </div>
    <Footer />
    </>
  )
}

export default Queue