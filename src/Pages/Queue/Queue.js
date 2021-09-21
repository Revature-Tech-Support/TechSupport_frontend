import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import axios from 'axios';

const Queue = ({ ticketId }) => {
  const displayIssue = issueId => {
    axios.get(`/issues/${issueId}`)
      .then(({ data }) => {
        console.log(data);
        return (
          <div className='issue' key={data.issueId}>
            <h3>{data.username}</h3>
            <h3>{data.issueId}</h3>
            <h3>{data.issueTitle}</h3>
          </div>
        );
      })
      .catch(err => console.error(err));
  };

  const openChat = issueId => {
    if (window.confirm('This will open a chat with the corresponding client. Proceed?')) {
      window.location = '/chat';
    }
  };

  return (
    <>
      <Navbar />
      <div className='jumbotron'>
        <h1 className='display-4'>Welcome to back to work!</h1>
        <p className='lead'><b>Remember the golden question:</b> Have you tried turning it off and on again?</p>
        <p className='lead'>{}</p>
        <hr className='my-4' />
      </div>
      <div className='container'>
        <div className='issueDisplay'>
          {displayIssue()}
        </div>
        <button
          className='btn btn-success'
          onClick={event => openChat(event)}
        >Start chat with next client
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Queue;
