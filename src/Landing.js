import React from 'react';
import './Landing.css';

import Contact from "./Contact"
import me from "./me.PNG"

const Landing = () => {

  return (
    <div className="landing frame">
        <div className="landing-content">
            <div className="heading">hi, i'm archie!</div>
            <div className="landing-text">
                <div className="landing-subtitle">i’m a designer and developer.</div>
                <div className="landing-subtitle">i’m currently studying mathematics &amp; computer science at UCLA.</div>
                <div className="landing-subtitle">wanna learn more? check me out below!</div>
            </div>
            <Contact bevel="true"></Contact>
        </div>
        <img className="landing-image"src={me} alt="archie"></img>        
    </div>
  );
};

export default Landing;