import React from 'react';
import './index.css';

const Page1 = () => {
  return (
    <div className="page1">
      <div className="column column1">
        <div className="yammer-header-logo" />
      </div>
      <div className="column">
        <h1 className="header-text">iamtheyammer</h1>
        <h2 className="sub-head-text">Full-Stack Developer</h2>
        <div className="social-icons">
          <div className="github-icon" />
          <div className="social-icons-divider" />
          <div className="email-icon" />
        </div>
        <div className="middle-divider"></div>
      </div>
    </div>
  )
};

export default Page1;
