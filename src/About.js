import React from 'react';
import './About.css';

import bubble from './speechbubble.png'

const About = () => {

  return (
    <div className="about frame">
        <div className="about-container">
            <div className="about-content">
                <div className="heading about-heading">about me</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in.</div>
                <br></br>
                <div className="text">Donec augue justo, eleifend ut tempus non, volutpat ac neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula ut sem eget posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.</div>
            </div>
            <img className="about-image" src={bubble} alt=""></img>
        </div>
    </div>
    
  );
};

export default About;