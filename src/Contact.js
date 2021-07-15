import React from 'react';
import './Contact.css';

import resume from './resume.svg'
import linkedin from './linkedin.svg'
import github from './github.svg'
import email from './email.svg'

import resumePDF from './resume.pdf'

const ContactButton = (props) => {
    return (
        <a className={props.bevel === "true" ? "contact-button bevel" : "contact-button"}
            target="_blank" rel="noreferrer" href={props.link}>
            <img className="contact-button-icon" src= {props.icon} alt=""></img>
            <div className="contact-button-label">{props.label}</div>
        </a>
    );
}

const Contact = (props) => {

  return (
    <div className="contact">
        <ContactButton 
            bevel={props.bevel}
            link={resumePDF}
            icon={resume}
            label="resume"
        ></ContactButton>

        <ContactButton 
            bevel={props.bevel}
            link="https://www.linkedin.com/in/archishadatta/"
            icon={linkedin}
            label="linkedin"
        ></ContactButton>

        <ContactButton 
            bevel={props.bevel}
            link="https://github.com/archishadatta"
            icon={github}
            label="github"
        ></ContactButton>
        <ContactButton 
            bevel={props.bevel}
            link="mailto:archisha.datta@gmail.com"
            icon={email}
            label="email"
        ></ContactButton>

    </div>
    
  );
};

export default Contact;