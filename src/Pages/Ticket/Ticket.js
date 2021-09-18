import React, { useRef, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Jumbotron from '../../Components/Jumbotron';
import Footer from '../../Components/Footer';
import axios from 'axios';

const Ticket = () => {

// states
const [input, setInput] = useState('');
const [ticket, setTicket] = useState([]);

const subject = useRef();
const issueDetails = useRef();
const fileUpload = useRef();

const handleInputChange = event => {
  setInput(event.target.value);
};

const submitTicket = event => {
  event.preventDefault();
  if (issueDetails !== '') {
    axios.post('/tickets', { 
      subject: subject, 
      // issue: issueDetails, 
      files: fileUpload })
  .then(({ data }) => {
    if (data) {
      console.log(data)
      alert(`Your ticket with ID: ${ticket.id} has been submitted!`) 
      setInput('');
    } else {
      alert('Please enter in details about your issue.')
    }
  })
  .catch(err => console.error(err))
  };
};

  return (
    <>
      <Navbar />
      <Jumbotron />
      <h2>Create a Ticket</h2>
      <div className='container ticketContainer'>
        <form>
          <div className='row justify-content-center'>
            <label htmlFor='subject' className='form-label'>Subject</label>
            <div className='col-3 p-3'>
              <input 
                type='text' 
                className='form-control' 
                ref={subject} 
                onChange={event => handleInputChange(event)}
                />
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='textArea' className='form-label'>Issue</label>
            <textarea 
              className='form-control' 
              ref={issueDetails} id='textArea' 
              rows='4' 
              placeholder='Please enter in details about your issue.' 
              onChange={event => handleInputChange(event)}
              required
            >
            </textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor='formFileMultiple' className='form-label'>Upload file(s) here</label>
            <input 
              className='form-control' 
              ref={fileUpload} 
              type='file' 
              onChange={event => handleInputChange(event)} 
              multiple />
          </div>
          <button 
            type='submit' 
            className='btn btn-primary'
            onClick={submitTicket}
          >Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Ticket;
