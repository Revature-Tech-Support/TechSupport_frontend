import React, { useState, useEffect } from 'react';
// import queryString from 'query-string';
// import io from 'socket.io-client';

// let socket;

const Chat = ({ location }) => {
  // const [name, setName] = useState("");
  // const endPoint = "localhost:3000";

  // useEffect(() => {
  //   const { name } =  queryString.parse(location.search);

  //   socket = io(endPoint);
  //   setName(name);
  //   socket.emit();
  // }, [endPoint, location.search]);

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
      .then(({ data }) => {
        console.log(data)
        if (data) {
          console.log(data)
        } else {
          console.log("error")
        }
      })
      .catch(err => console.error(err))
      }
      
  return (
    
    <div className="container hidden">
      <h2>Chat</h2>
      <div className="mb-3">
        <textarea class="form-control" id="chatBox" rows="3" placeholder="Type message here..."></textarea>
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={event => messageState.sendMessage(event)}
      >
        Send
      </button>
    </div>
  );
}

export default Chat;