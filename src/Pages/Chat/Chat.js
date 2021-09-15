import React, { useEffect, useState, useRef } from 'react';
import Message from '../../Components/Message';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import './Chat.css';
import axios from 'axios';
import Jumbotron from '../../Components/Jumbotron';

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
    if (user === "user") {
    alert("You have left the chat and will now be redirected to the login/register page.")
    //clears user from localStorage, thereby logging them out
    localStorage.clear();  
    } else {
      alert("Issue has been marked as resolved.")
    }
  };

  // const retrieveHistory = (event) => {
  //   event.preventDefault();
  //   axios.get("/users/chatHistory")
  //     .then (({ data }) => {
  //       setMessageState({...messageState, messages: data})
  //     })
  //     .catch(err => console.error(err))
  // }

  return (
    <>
    <Navbar />
    <Jumbotron />
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
          <div className="col">
          <li className="sender">
            
            <div className="msg">
              {/* <p>{data.sender.username}</p> */}
              {/* <div className="msgText"> {data.data.text}</div> */}
              <p>SENDER</p>
              <div className="msgText">{messageState.displayText}</div>
            </div>
          </li>
          </div>
          ) : (
            <div className="col">
          <li className="receiver">
            <div className="msg">
              {/* <p>{data.receiver.username}</p> */}
              {/*<div className="msgText"> {data.data.text} </div> */}
              <p>RECEIVER</p>
              <div className="msgText">Hi to You too!</div>
            </div>
          </li>
            </div>
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
          <div 
          ref={scrollRef} 
          // className="scroll"
            style={{ float: "left", clear: "both", paddingTop: "4rem" }}></div>
        </div>
      </ul>
      <div className="row">
      <div className="m chatInputWrapper">
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
          {/* <button 
          className="btn btn-info"
          onClick={event => messageState.retrieveHistory(event)}>Display transaction history</button> */}
        </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Chat;