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
    axios.post('/users/messages', {
      user: messageState.user,
      message: messageState.message,
    })
      .then(({ data }) => {
        console.log(data)
        if (data) {
          setMessageState({ ...messageState, displayText: messageState.inputText, inputText: '' })
        } else {
          alert("Please type in a message.")
        }
      })
      .catch(err => console.error(err))
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
            name="input"
            placeholder="Type a message here"
            value={input}
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

// const Chat = ({ user, onClick }) => {
  
//   const scrollRef = useRef();

//   // message state and functions
//   const [messages, setMessages] = useState([])
//   const [messageState, setMessageState] = useState({
//     users: [],
//     sendMessage: '',
//     inputText: '',
//     displayText: '',
//     handleInputChange: ''
//   })

//   //input state and function
//   const [input, setInput] = useState("");

//   messageState.handleInputChange = event => {
//     setMessageState({ ...messageState, [event.target.name]: event.target.value })
//     console.log(messageState);
//   }

//   messageState.sendMessage = event => {
//     event.preventDefault()
//     axios.post('/users/messages', {
//       user: messageState.user,
//       message: messageState.message,
//     })
//       .then(({ data }) => {
//         if (data) {
//           console.log(data)
//           setMessageState({ ...messageState, displayText: messageState.inputText, inputText: ''})
//       }
//     })
//       .catch(err => console.error(err))
//   }

//   const onSubmit = event => {
//     event.preventDefault();
//     if(!messages) {
//       alert("Please type in a message.")
//       return
//     }

//     onClick({ messages })

//     setInput("")
//   }

//   //close chat state and function
//   const [closed, setClosed] = React.useState(false);

//   const handleCloseChat = () => {
//     setClosed(true);
//   };
      
//   return (
//     <div className="container chatBox">
//       <div className="chatHeader">
//         {/* <img src={user.photo} alt="avatar" /> */}
//         <p id="chatTitle">CHAT</p>
//         <h2 
//         id="close"
//         onClick={event => handleCloseChat(event)}
//         >&times;</h2>
//       </div>
      
//       <div className="chatMessages">
//         {/* {messages.map((message) => (
//           <Message key={message.id} message={message} />
//         ))} */}
//         <div
//           ref={scrollRef}
//           style={{ float: "left", clear: "both", paddingTop: "4rem" }}
//         ></div>
//       </div>
//       <div className="mb-3">
//         <form onSubmit={onSubmit}>
//           <input
//             id="messages"
//             type="text"
//             name="messages"
//             placeholder="Type a message here"
//             value={messages}
//             onChange={(event) => {
//               messageState.handleInputChange(event)
//               setInput(event.target.value)
//             }
//           }
//           />
//           <button 
//             className="btn btn-primary"
//             onClick={event => messageState.sendMessage(event)}
//           >
//           Send
//           </button>
//         </form>        
//       </div>
//     </div>
//   );
// }

export default Chat;