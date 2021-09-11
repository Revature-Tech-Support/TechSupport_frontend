import React, { useState, useRef } from 'react';
import Message from '../Message'
import './Chat.css';
import axios from 'axios';

const Chat = ({ user, onClick }) => {
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
          this.setState({ messageState: data, message: '' })
      }
    })
      .catch(err => console.error(err))
  }

  const sendText = (event) => {
    event.preventDefault();
    this.setState({ sendMessage: this.state.unsentMessage, message: '' })
  }

  const onSubmit = event => {
    event.preventDefault();
    if(!message) {
      alert("Please type in a message.")
      return
    }

    onClick({ message })

    setInput("")
  }

  //close chat state and function
  const [closed, setClosed] = React.useState(false);

  const handleCloseChat = () => {
    setClosed(true);
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
        <h3>Message: {this.messageState.sendMessage}</h3>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div
          ref={scrollRef}
          style={{ float: "left", clear: "both", paddingTop: "4rem" }}
        ></div>
      </div>
      <div className="mb-3">
        <form onSubmit={onSubmit}>
          <input
            id="message"
            type="text"
            name="message"
            placeholder="Type a message here"
            value={message}
            onChange={(event) => {
              messageState.handleInputChange(event)
              setInput(event.target.value)
            }
          }
          />
          <button 
            className="btn btn-primary"
            onClick={this.sendText}
            // onClick={event => messageState.sendMessage(event)}
          >
          Send
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Chat;