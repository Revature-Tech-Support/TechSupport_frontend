import React, { useEffect, useState, useRef } from 'react';
import Message from '../Message';
import './Chat.css';
import axios from 'axios';

const Chat = ({ user, onClick }) => {

  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  // message state and functions
  const [messageState, setMessageState] = useState({
    user: '',
    users: [],
    message: '',
    messages: [],    
    inputText: '',
    displayText: '',
    sendMessage: '',
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
    //let messages = JSON.parse(JSON.stringify(messageState.messages))
    // axios.post('/users/messages', {
    //   user: messageState.user,
    //   message: messageState.message,
    // })
    //   .then(({ data }) => {
    //     console.log(data)
    //     if (data) {
    //       messages.push(data)   
    //       setMessageState({ ...messageState, messages, inputText: '' })
    //     } else {
    //       alert("Please type in a message.")
    //     }
    //   })
    //   .catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get('/users/messages')
      .then(({ data }) => {
        setMessageState({ ...messageState, messages: data })
      })
      .catch(err => console.error(err))
  }, [])

  //close chat state and function
  const [closed, setClosed] = React.useState(false);

  const handleCloseChat = () => {
    setClosed(true);
  };

  return (
    <div className="container chatBox">
      <div className="chatHeader">
        <div className="row">
        {/* <img src={user.photo} alt="avatar" /> */}
        <div className="col">
        <p className="chatTitle">CHAT</p>
          </div>
          <div className="col">
        <button
          className="close"
          onClick={event => handleCloseChat(event)}
        >&times;</button>
          </div>
        </div>
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
      {/* <div className="mb-3"> */}
      <div className="m">
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