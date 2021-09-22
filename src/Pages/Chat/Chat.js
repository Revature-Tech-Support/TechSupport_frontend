import React, { useState, useRef, useEffect } from "react";
// import Message from "../../Components/Message";
import MessageCopy from "../../Components/Message";
import "./Chat.css";
import axios from "axios";
import Layout from "../../Components/Layout";
import { ReactComponent as RightArrow } from "../../resources/svg/circle-right.svg";
import { ReactComponent as TimesCircle } from "../../resources/svg/times-circle.svg";

const Chat = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const scrollRef = useRef();
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
    }
  };

  const getTranscripts = (event) => {
    event.preventDefault();
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
            <TimesCircle
              onClick={(event) => handleCloseChat(event)}
            ></TimesCircle>
          </div>
          <div className="messages-cc">
            {messages.map((message, idx) => (
              <MessageCopy key={idx} message={message} />
            ))}
            
          </div>
          <div className="chat-input-div">
            {/* <form className='chat-input-form'> */}
            <input
              // id="messageInput"
              type="text"
              name="inputText"
              placeholder="Type your message here"
              value={input}
              onChange={(event) => handleInputChange(event)}
              className="form-control chat-input"
            ></input>
            <RightArrow onClick={(event) => sendMessage(event)}></RightArrow>
            {/* </form> */}
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
    </>
  );
};

export default Chat;

/**
 * 
 * DELETE ASAP DEV TEST
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages1</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages2</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
            <div className="message-cc sender-cc">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
                alt="sender pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-sender">Messages3</p>
            </div>
            <div className="message-cc receiver-cc ">
              <img
                className="profile-pic"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
                alt="receiver pic"
                height="30px"
                width="30px"
              />
              <p className="message-text message-text-receiver">Messages4</p>
            </div>
 */
