import React, { useState, useRef, useEffect } from "react";
import Message from "../../Components/Message";
import "./Chat.css";
import axios from "axios";
import Layout from "../../Components/Layout";

const Chat = () => {
  const scrollRef = useRef();
  const webSocket = useRef();
  const user = JSON.parse(window.localStorage.getItem('user'));

  // states
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // event handlers
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    if (input !== "") {
      webSocket.current.send(
        JSON.stringify({
          username: user,
          message: input,
          timestamp: Date.now(),
        })
      );
      setInput("");
    }
  };

  const handleCloseChat = (event) => {
    if (user === "client") {
      // this comparison will need to be updated
      window.confirm(
        "You have left the chat and will now be redirected to the login/register page."
      );
      // clears client from localStorage, thereby logging them out
      window.localStorage.clear();
      window.location = "/";
    } else {
      // this is for tech support and redirects them to the queue
      window.confirm("Issue has been marked as resolved.");
      localStorage.removeItem("transcripts");
      window.location = "/queue";
=======
    if (input !== '') {
      webSocket.current.send(JSON.stringify({ username: user.username, message: input, timestamp: Date.now() }));
      setInput('');
    }
  };

  const handleCloseChat = event => {
    if (user === 'client') { // this comparison will need to be updated
      if (window.confirm('You have left the chat and will now be redirected to the login/register page.')) {
        // clears client from localStorage, thereby logging them out
        window.localStorage.clear();
        window.location = '/';
      }
    } else {
      // this is for tech support and redirects them to the queue
      if (window.confirm('Issue has been marked as resolved.')) {
        window.localStorage.removeItem('transcripts');
        window.location = '/queue';
      }
>>>>>>> lanchi-copy
    }
  };

  const getTranscripts = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      // axios.get(`/transcripts/${userId}`, {
      //   transcripts: transcripts
      // })
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("transcripts", JSON.stringify(data));
        window.open("/history", "_blank");
      })
      .catch((err) => console.error(err));
=======
    axios.get('https://jsonplaceholder.typicode.com/users')
    // axios.get(`/transcripts/${userId}`, {
    //   transcripts: transcripts
    // })
      .then(({ data }) => {
        console.log(data);
        window.localStorage.setItem('transcripts', JSON.stringify(data));
        window.open('/history', '_blank');
      })
      .catch(err => console.error(err));
>>>>>>> lanchi-copy
  };

  useEffect(() => {
    webSocket.current = new window.WebSocket("ws://localhost:8080/ws");

    webSocket.current.onopen = () => {
      console.log("Connected to websocket");
    };
    webSocket.current.onerror = (error) => {
      console.log(error);
    };
    webSocket.current.onclose = () => {
      console.log("Disconnected from websocket");
    };
  }, []);

  useEffect(() => {
    webSocket.current.onmessage = (event) => {
      setMessages((messages) => [...messages, JSON.parse(event.data)]);
    };
  }, [messages]);

  return (
    <>
      <Layout
      imgSrc = ""
      imgAlt = ""
      imgWidth = ""
      imgHeight = ""
      title = ""
      desc = ""
      jtClass = "pt-1"
      childClass = "chat-page"
      >
        <div className="container chatBox">
          <div className="chatHeader">
            <div className="row">
              <div className="col">
                <p className="chatTitle">CHAT</p>
                {/* <p className='chatTitle'>Client: {data.username}</p>
              <p className='chatTitle'>Issue #: {data.ticketId}</p>
              <p className='chatTitle'>Subject: {data.subject}</p> */}
              </div>
              <div className="col">
                <button
                  className="close"
                  onClick={(event) => handleCloseChat(event)}
                >
                  &times;
                </button>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <ul className="chat" id="chatList">
            <div className="chatMessages">
              <div className="col">
                <li className="sender">
                  <div className="msg">
                    <p>SENDER</p>
                  </div>
                </li>
              </div>
              <div className="col">
                <li className="receiver">
                  <div className="msg">
                    <p>RECEIVER</p>
                  </div>
                </li>
              </div>
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              <div
                ref={scrollRef}
                // className='scroll'
                style={{ float: "left", clear: "both", paddingTop: "4rem" }}
              >
                {}
              </div>
            </div>
          </ul>
          <div className="row">
            <div className="chatInputWrapper">
              <form>
                <input
                  id="messageInput"
                  type="text"
                  name="inputText"
                  placeholder="Type a message here"
                  value={input}
                  onChange={(event) => handleInputChange(event)}
                />
                <button
                  className="btn btn-outline-primary"
                  onClick={(event) => sendMessage(event)}
                >
                  Send
                </button>
                <button
                  className="button btn btn-outline-warning transcripts"
                  target="_blank"
                  onClick={(event) => getTranscripts(event)}
                >
                  Transcripts
                </button>
              </form>
=======
        <ul className='chat' id='chatList'>
          <div className='chatMessages'>
            {messages.map(message => (
              <Message key={message.id} message={message} />
            ))}
            <div
              ref={scrollRef}
              style={{ float: 'left', clear: 'both', paddingTop: '4rem' }}
            >
              {}
>>>>>>> lanchi-copy
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Chat;
