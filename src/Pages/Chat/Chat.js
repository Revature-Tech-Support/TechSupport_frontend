import React, { useEffect, useState, useRef } from 'react';
import Message from '../../Components/Message';
import Navbar from '../../Components/Navbar';
import Jumbotron from '../../Components/Jumbotron';
import Footer from '../../Components/Footer';
import './Chat.css';
import axios from 'axios';

const Chat = ({ user, onClick }) => {

  const scrollRef = useRef();

  // states
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [closed, setClosed] = useState(true);

  // event handlers
  const handleInputChange = event => {
    setInput(event.target.value);
  }

  const sendMessage = event => {
    event.preventDefault()
    //the next lines are only used for testing purposes and should be removed once backend is set up
    if (input !== '') {
      setInput('');
      // send message here (need websocket defined)
      // ws.send({user, message});
    }
  }

  const handleCloseChat = event => {
    setClosed(true);
    if (user === 'user') {
      alert('You have left the chat and will now be redirected to the login/register page.')
      // clears user from localStorage, thereby logging them out
      localStorage.clear();
      window.location = '/'
    } else {
      // this is for tech support and redirects them to the queue
      alert('Issue has been marked as resolved.')
      window.location = '/queue'
    }
  };

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className='container chatBox'>
        <div className='chatHeader'>
          <div className='row'>
            <div className='col'>
              <p className='chatTitle'>CHAT</p>
              {/* <p className='chatTitle'>Client: {data.username}</p>
              <p className='chatTitle'>Issue #: {data.ticketId}</p>
              <p className='chatTitle'>Subject: {data.subject}</p> */}
            </div>
            <div className='col'>
              <button
                className='close'
                onClick={(event) => handleCloseChat(event)}
              >
                &times;
              </button>
            </div>
          </div>
        </div>

        <ul className='chat' id='chatList'>
          <div className='chatMessages'>
            <div className='col'>
              <li className='sender'>
                <div className='msg'>
                  {/* <p>{data.sender.username}</p> */}
                  {/* <div className='msgText'> {data.data.text}</div> */}
                  <p>SENDER</p>
                </div>
              </li>
            </div>
            {/* ) : ( */}
            <div className='col'>
              <li className='receiver'>
                <div className='msg'>
                  {/* <p>{data.sender.username}</p> */}
                  {/*<div className='msgText'> {data.data.text} </div> */}
                  <p>RECEIVER</p>
                  {/* <div className='msgText'>Hi to You too!</div> */}
                </div>
              </li>
            </div>
            {messages.map(message => (
              <Message key={message.id} message={message} />
            ))}
            <div
              ref={scrollRef}
              // className='scroll'
              style={{ float: 'left', clear: 'both', paddingTop: '4rem' }}>
            </div>
          </div>
        </ul>

        <div className='row'>
          <div className='m chatInputWrapper'>
            <form>
              <input
                id='messageInput'
                type='text'
                name='inputText'
                placeholder='Type a message here'
                value={input}
                onChange={event => handleInputChange(event)}
              />
              <button
                className='btn btn-primary'
                onClick={event => sendMessage(event)}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Chat;