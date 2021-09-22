import React, { useState } from "react";
import Layout from "../Components/Layout";

const Queue = ({ ticketId }) => {
  //const [userId, setUserId] = useState(window.localStorage.getItem('userId'));

  const startChat = (event) => {
    console.log(event);
    let openChat = window.confirm(
      "This will open a chat with the corresponding client. Proceed?"
    );
    if (openChat) {
      window.location = "/chat";
    }
  };

  return (
    <>
      <Layout
        imgSrc=""
        imgAlt=""
        imgWidth=""
        imgHeight=""
        title="Welcome back to work"
        desc="Remember the golden question: Have you tried turning it off and on again?"
        jtClass="home-jt"
      >
        <button
          className="btn btn-outline-primary mt-5"
          onClick={(event) => startChat(event)}
        >
          Start chat with next client
        </button>
        <div className="pt-0 pb-5 mb-5">
          <img
            src="./resources/imgs/work.png"
            alt="support"
            height="330px"
            width="360px"
          />
        </div>
      </Layout>
    </>
  );
};

export default Queue;
