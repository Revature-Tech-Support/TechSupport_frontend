import React, { useState, useRef } from 'react';
import Message from '../Message';
import './Chat.css';
import axios from 'axios';

const Chat = ({ user, onClick }) => {

  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  // message state and functions
  const [messageState, setMessageState] = useState({
    users: [],
    sendMessage: '',
    inputText: '',
    displayText: '',
    handleInputChange: ''
  })

  //input state and function
  const [input, setInput] = useState("");
  messageState.handleInputChange = event => {
    setMessageState({ ...messageState, [event.target.name]: event.target.value })
    console.log(messageState);
  }

  messageState.sendMessage = event => {
    event.preventDefault()
    setMessageState({ ...messageState, displayText: messageState.inputText, inputText: '' })
    // axios.post('/users/messages', {
    //   user: messageState.user,
    //   message: messageState.message,
    // })
    //   .then(({ data }) => {
    //     console.log(data)
    //     if (data) {
    //       setMessageState({ ...messageState, displayText: messageState.inputText, inputText: '' })
    //     } else {
    //       alert("Please type in a message.")
    //     }
    //   })
    //   .catch(err => console.error(err))
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
        <h3>Message: {messageState.displayText}</h3>
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
          <input
            id="messageInput"
            type="text"
            name="inputText"
            placeholder="Type a message here"
            value={messageState.inputText}
            onChange={(event) => {
              messageState.handleInputChange(event)
              setInput(event.target.value)
              }
            }
          />
          <button
            className="btn btn-primary"
            onClick={event => messageState.sendMessage(event)}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;