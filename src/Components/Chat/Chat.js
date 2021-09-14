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
    //this next line renders input text directly on the page
    setMessageState({ ...messageState, displayText: messageState.inputText, inputText: '' })
    
    let messages = JSON.parse(JSON.stringify(messageState.messages))
    axios.post('/users/messages', {
      user: messageState.user,
      message: messageState.message,
    })
      .then(({ data }) => {
        console.log(data)
        if (data) {
          messages.push(data)   
          setMessageState({ ...messageState, messages, inputText: '' })
        } else {
          alert("Please type in a message.")
        }
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get('/users/messages')
      .then(({ data }) => {
        setMessageState({...messageState, messages: data })
      })
      .catch(err => console.error(err))
  }, [])

  //close chat state and function
  const [closed, setClosed] = useState(true);

  const handleCloseChat = (event) => {
    
    console.log(event)
    setClosed(true);
    alert("You have left the chat and will now be redirected to the login/register page.")
    //clears user from localStorage, thereby logging them out
    localStorage.clear();  
  };

  //ternary to differentiate between sender and receiver
  const isSender = (user) => {
    return (user === "receiver");
  }

  return (
    <div className="container chatBox">
      <div className="chatHeader">
        <div className="row">
        <div className="col">
        <p className="chatTitle">CHAT</p>
          </div>
          <div className="col">
        <button
          className="close"
          onClick={(event) => handleCloseChat(event)}
        >&times;</button>
          </div>
        </div>
      </div>
      
      <ul className="chat" id="chatList">
      <div className="chatMessages">
        <li className="sender">
          <div className="msg">
              {/* <div className="message"> {data.data.text}</div> */}
              <div className="msgText"> Hello there!</div>
            </div>
          </li>
          ) : (
          <li className="receiver">
            <div className="msg">
              {/* <p>{data.sender.uid}</p> */}
              {/*<div className="message"> {data.data.text} </div> */}

              <div className="msgText"> Hi to You too! </div>
            </div>
          </li>
        {/* <p 
        className={isSender ? "senderColor" : "receiverColor"}>
          Message: {messageState.displayText}</p> */}
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div
          ref={scrollRef}
          style={{ float: "left", clear: "both", paddingTop: "4rem" }}
        ></div>
      </div>
      </ul>
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