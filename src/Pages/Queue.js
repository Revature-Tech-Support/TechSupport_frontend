import React from 'react';
import Layout from '../Components/Layout';
// import axios from 'axios';

const Queue = ({ ticketId }) => {
  // const displayIssue = issueId => {
  //   axios.get('/issue/oldest')
  //     .then(({ data }) => {
  //       console.log(data);
  //       return (
  //         <div className='issue' key={data.issueId}>
  //           <h3>{data.username}</h3>
  //           <h3>{data.issueId}</h3>
  //           <h3>{data.issueTitle}</h3>
  //         </div>
  //       );
  //     })
  //     .catch(err => console.error(err));
  // };

  const startChat = (event) => {
    console.log(event);
    if (window.confirm(
      'This will open a chat with the corresponding client. Proceed?'
    )) {
      window.location = '/chat';
    }
  };

  return (
    <Layout
      imgSrc=''
      imgAlt=''
      imgWidth=''
      imgHeight=''
      title='Welcome back to work'
      desc='Remember the golden question: Have you tried turning it off and on again?'
      jtClass='home-jt'
    >
      <button
        className='btn btn-outline-primary mt-5'
        onClick={(event) => startChat(event)}
      >
        Start chat with next client
      </button>
      <div className='pt-0 pb-5 mb-5'>
        <img
          src='./resources/imgs/work.png'
          alt='support'
          height='330px'
          width='360px'
        />
      </div>
    </Layout>
  );
};

export default Queue;
