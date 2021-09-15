import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Queue = () => {
  return (
    <>
    <Navbar />
    <div classNameName="container">
      <div className="row">
        <div className="col">
          Username
        </div>
        <div className="col">
          Minutes waiting
        </div>
      </div>
      <div className="list-group list-group-numbered">
        <a href="/queue/username" className="list-group-item list-group-item-action active" aria-current="true">
        The current link item
        <span class="badge bg-primary rounded-pill">14</span>
        </a>
          <a href="/queue/username" className="list-group-item list-group-item-action">A second link item</a>
          <a href="/queue/username" className="list-group-item list-group-item-action">A third link item</a>
          <a href="/queue/username" className="list-group-item list-group-item-action">A fourth link item</a>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Queue