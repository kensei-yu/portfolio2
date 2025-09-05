import React from 'react';
import logo from '../logo.svg';

function Home() {
  return (
    <div className="home-container">
      <div className="main-work">
        <img src={logo} alt="Main work showcase" className="main-image" />
        <div className="main-info">
          <h1>Kensei Yu</h1>
          <p>Frontend Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;