import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const History = () => {
  // const displayTranscripts = () => {
  //   const transcripts = JSON.parse(window.localStorage.getItem('transcripts'));
  //   console.log(transcripts);
  //   return transcripts ? (
  //   transcripts.map(transcripts => {
  //     return (
  //       <div className='transcripts' key={transcripts.id}>
  //         <h3>{transcripts.name}</h3>
  //       </div>
  //       );
  //     })
  //   ) : (
  //     <h3>No transcripts yet</h3>
  //   );
  // };

  const displayData = () => {
    const data = JSON.parse(window.localStorage.getItem('transcripts'));
    console.log(data);
    return data
      ? (
          data.map(data => {
            return (
              <div className='data' key={data.id}>
                <h3>{data.name}</h3>
              </div>
            );
          })
        )
      :
        (
          <h3>No data yet</h3>
        );
  };

  return (
    <>
      <Navbar />
      <div className='jumbotron'>
        <h1 className='display-4'>Welcome to the transaction history page!</h1>
        <p className='lead'>A good place to take a walk down memory lane...or to do some light reading</p>
        <p className='lead'>{}</p>
        <hr className='my-4' />
      </div>

      <div className='container'>
        {/* {displayTranscripts()} */}
        {displayData()}
      </div>
      <Footer />
    </>
  );
};

export default History;
