import React, { useState, useRef } from 'react';
import Message from '../Message'
import './Chat.css';
import axios from 'axios';

const Chat = ({ user }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  // message state and functions
  const [messageState, setMessageState] = useState({
    users: [],
    sendMessage: '',
    handleInputChange: ''
  })

  messageState.handleInputChange = event => {
    setMessageState({ ...messageState, [event.target.name]: event.target.value })
    console.log(messageState);
  }

  messageState.sendMessage = event => {
    event.preventDefault()
    axios.post('/users/messages', {
      user: messageState.user,
      message: messageState.message,
    })
      .then(({ data }) => {
        if (data) {
          console.log(data)
      }
    })
      .catch(err => console.error(err))
  }

  const sendText = (input) => {
    console.log(input);
  }

  //close chat state and function
  const [setClose] = React.useState(false);

  const handleCloseChat = () => {
    setClose(true);
  };
      
  return (
    <div className="container chatBox">
      <div className="chatHeader">
        {/* <img src={user.photo} alt="avatar" /> */}
        <p id="chatTitle">CHAT</p>
        <h2 
        id="close"
        onClick={event => handleCloseChat(event)}
        >&times;</h2>
      </div>
      
      <div className="chatMessages">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div
          ref={scrollRef}
          style={{ float: "left", clear: "both", paddingTop: "4rem" }}
        ></div>
      </div>
      <div className="mb-3">
        <form>
          <div className="input-group mb-3" style={{ width: "500px", margin: "auto" }}>
          <input
            id="messageInput"
            type="text"
            placeholder="Type a message here"
            value={input}
            onChange={(event) => {
              messageState.handleInputChange(event)
              setInput(event.target.value)
              //const keypress = event.target.value.slice(-1)
              //default: setInput(event.target.value)
            }
          }
          />
          <button 
            className="btn btn-primary"
            onClick={sendText}
            // onClick={event => messageState.sendMessage(event)}
          >
          Send
          </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default Chat;