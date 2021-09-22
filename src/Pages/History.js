import React from 'react';
import Layout from '../Components/Layout';

const History = () => {
  const displayTranscripts = () => {
    const transcripts = JSON.parse(window.localStorage.getItem('transcripts'));
    console.log(transcripts);
    return transcripts ? (
      transcripts.map((transcripts) => (
        <div className='transcripts' key={transcripts.id}>
          <h3>{transcripts.name}</h3>
        </div>
      ))
    ) : (
      <h3>No transcripts yet</h3>
    );
  };

  return (
    <Layout
      title='Welcome to the transaction history page!'
      desc='A good place to take a walk down memory lane...or to do some light reading'
    >
      <div className='container'>{displayTranscripts()}</div>
    </Layout>
  );
};

export default History;
