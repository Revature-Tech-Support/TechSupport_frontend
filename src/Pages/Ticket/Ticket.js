import React from 'react'; 
import Navbar from "../../Components/Navbar";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";

const Ticket = () => {
  return (
    <>
    <Navbar />
    <Jumbotron />
    <h2>Create a Ticket</h2>
    <div className="container">
    <form>
      <div class="row justify-content-center">
        <label htmlFor="username" className="form-label">Username</label>
        <div class="col-3 bg-light p-3">
          <input type="text" className="form-control" id="ticketUsername" />
        </div>
      </div>
      {/* <div class="row justify-content-center">
        <label htmlFor="subject" className="form-label">Subject</label>
        <div class="col-3 bg-light p-3">
          <input type="text" className="form-control" id="subject" />
        </div>
      </div> */}
      <div className="mb-3">
        <label htmlFor="textArea" className="form-label">Issue</label>
        <textarea className="form-control" id="textArea" rows="3" placeholder="Please enter in details about your issue.">
        </textarea>
      </div>
      <div class="mb-3">
        <label htmlFor="formFileMultiple" class="form-label">Upload file(s) here</label>
        <input className="form-control" type="file" id="formFileMultiple" multiple />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
      </div>
    <Footer />
    </>
  )
}

export default Ticket;