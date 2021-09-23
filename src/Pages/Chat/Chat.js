import React, { useState, useRef, useEffect } from "react";
// import Message from '../../Components/Message';
import MessageCopy from "../../Components/Message";
import "./Chat.css";
import axios from "axios";
import Layout from "../../Components/Layout";
import { ReactComponent as RightArrow } from "../../resources/svg/circle-right.svg";
import { ReactComponent as TimesCircle } from "../../resources/svg/times-circle.svg";

const Chat = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const webSocket = useRef();

  // states
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // event handlers
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (input !== "") {
      webSocket.current.send(
        JSON.stringify({
          username: user.username,
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
      if (
        window.confirm(
          "You have left the chat and will now be redirected to the login/register page."
        )
      ) {
        // clears client from localStorage, thereby logging them out
        window.localStorage.clear();
        window.location = "/";
      }
    } else {
      // this is for tech support and redirects them to the queue
      if (window.confirm("Issue has been marked as resolved.")) {
        window.localStorage.removeItem("transcripts");
        window.location = "/queue";
      }
    }
  };

  const getTranscripts = (event) => {
    event.preventDefault();
    // 'axios.get' line needs to be replaced once transcripts is connected to the frontend
    // for now, using jsonplaceholder dummy data to demonstrate functionality
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      // axios.get(`/transcripts/${userId}`, {
      //   transcripts: transcripts
      // })
      .then(({ data }) => {
        console.log(data);
        window.localStorage.setItem("transcripts", JSON.stringify(data));
        window.open("/history", "_blank");
      })
      .catch((err) => console.error(err));
  };

  // console logging status updates based on whether WebSocket is connected
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

  // using WebSocket to send messages
  useEffect(() => {
    webSocket.current.onmessage = (event) => {
      setMessages((messages) => [...messages, JSON.parse(event.data)]);
    };
  }, [messages]);

  return (
    <Layout
      imgSrc=""
      imgAlt=""
      imgWidth=""
      imgHeight=""
      title=""
      desc=""
      jtClass="pt-1"
      childClass="chat-page-cc"
    >
      <div className="chat-app-cc">
        <div className="chat-header-cc">
          <h3>Chatting with Mr. Tyson</h3>
          <TimesCircle onClick={(event) => handleCloseChat(event)} />
        </div>
        <div className="messages-cc">
          {messages.map((message, idx) => (
            <MessageCopy key={idx} message={message} />
          ))}
        </div>
        <div className="chat-input-div">
          <input
            type="text"
            name="inputText"
            placeholder="Type your message here"
            value={input}
            onChange={(event) => handleInputChange(event)}
            className="form-control chat-input"
          />
          <RightArrow onClick={(event) => sendMessage(event)} />
          <button
            className="button btn btn-outline-primary transcripts-cc"
            target="_blank"
            onClick={(event) => getTranscripts(event)}
          >
            Transcripts
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
