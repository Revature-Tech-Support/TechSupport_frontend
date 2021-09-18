import React, { useState, useRef, useEffect } from 'react';
import Message from '../../Components/Message';
import Navbar from '../../Components/Navbar';
import Jumbotron from '../../Components/Jumbotron';
import Footer from '../../Components/Footer';
import './Chat.css';
// import axios from 'axios';

const Chat = ({ user }) => {
  const scrollRef = useRef();
  const webSocket = useRef();

  // states
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // event handlers
  const handleInputChange = event => {
    setInput(event.target.value);
  };

  const sendMessage = event => {
    event.preventDefault();
    if (input !== '') {
      setInput('');
      webSocket.current.send(input);
    }
  };

  const handleCloseChat = event => {
    if (user === 'user') {
      window.confirm('You have left the chat and will now be redirected to the login/register page.');
      // clears user from localStorage, thereby logging them out
      window.localStorage.clear();
      window.location = '/';
    } else {
      // this is for tech support and redirects them to the queue
      window.confirm('Issue has been marked as resolved.');
      window.location = '/queue';
    }
  };

  useEffect(() => {
    webSocket.current = new window.WebSocket('ws://localhost:8080/ws');

    webSocket.current.onopen = () => {
      console.log('Connected to websocket');
    };
    webSocket.current.onerror = (error) => {
      console.log(error);
    };
    webSocket.current.onclose = () => {
      console.log('Disconnected from websocket');
    };
  }, []);

  useEffect(() => {
    webSocket.current.onmessage = (event) => {
      setMessages(messages => [...messages, event.data]);
    };
  }, [messages]);

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
                  {/* <div className='msgText'> {data.data.text} </div> */}
                  <p>RECEIVER</p>
                  {/* <div className='msgText'>Hi to You too!</div> */}
                </div>
              </li>
            </div>
            {messages.map(message => (
              <Message key={messages.id} message={message} />
            ))}
            <div
              ref={scrollRef}
              // className='scroll'
              style={{ float: 'left', clear: 'both', paddingTop: '4rem' }}
            >
              {}
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
};

export default Chat;
