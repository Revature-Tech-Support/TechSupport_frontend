import React, { useEffect, useState } from 'react'; 
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import axios from 'axios';

const History = () => {
  const [data, setData] = useState('');
  // const retrieveTranscript = userId => {
  //   axios.get(`/tickets/${userId}`)
  //     .then(({ data }) => {
  //       console.log(data)
  //     })
  //     .catch(err => console.error(err))
  // }

  // componentWillMount() {
  //   localStorage.pagedata = data;
  //   // set the data in state and use it through the component
  // }

  const displayData = () => {
    const data = JSON.parse(localStorage.getItem('transcripts'))
    console.log(data)
    return data ? (
      data.map(data => {
        return (
          <div className='data' key={data.id}>
            <h3>{data.name}</h3>
          </div>
        );
      })
    ) : (
      <h3>No data yet</h3>
    );
  }

  return (
    <>
    <Navbar />
      <div className='jumbotron'>
        <h1 className='display-4'>Welcome to the transaction history page!</h1>
        <p className='lead'>A good place to take a walk down memory lane...or just to find out where you did the last time this issue came up.</p>
        <p className='lead'></p>
        <hr className='my-4' />
      </div>

      <div className='container'>
        {displayData()}
    </div>
    <Footer />
    </>
  );
};

export default History;