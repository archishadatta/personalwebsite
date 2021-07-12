import React from 'react';
import './About.css';

import bubble from './speechbubble.png'

const About = () => {

  return (
    <div className="about frame">
        <div className="about-container">
            <div className="about-content">
              <div className="heading about-heading">about me</div>
              <div className="text"> Hey there, I’m Archie! I’m a student at UCLA currently learning about mathematics and computer science. I’m especially interested in the intersection of math, computers, and art. Basically, I love to make things: websites, animations, clothes, and really anything you can think of! </div>
              <br></br>
              <div className="text"> At school, I’m involved in ACM, the largest computer science student organization on campus and Daily Bruin, our school newspaper. I do design and web development for projects ranging from interactive learning modules to feature stories. I also work as a Computer Science instructor and a web developer for a local small business. In other words, I spend a lot of time on Figma and Github. </div>
              <br></br>
              <div className="text"> In my free time, you can catch me working on a sewing project, reading a book, or hanging out with my little sister! </div>
            </div>
            <img className="about-image" src={bubble} alt=""></img>
        </div>
    </div>
    
  );
};

export default About;