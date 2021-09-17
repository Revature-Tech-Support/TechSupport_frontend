import React from 'react';
import Navbar from '../../Components/Navbar';
import Jumbotron from '../../Components/Jumbotron';
import Footer from '../../Components/Footer';

const Ticket = () => {
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
              <input type='text' className='form-control' id='subject' />
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='textArea' className='form-label'>Issue</label>
            <textarea className='form-control' id='textArea' rows='4' placeholder='Please enter in details about your issue.'>
            </textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor='formFileMultiple' className='form-label'>Upload file(s) here</label>
            <input className='form-control' type='file' id='formFileMultiple' multiple />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Ticket;