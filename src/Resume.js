import React from 'react';
import './Resume.css';

import border from './resumedecoration.png'
import langicon from './lang_icon.png'
import progicon from './prog_icon.png'
import miscicon from './misc_icon.png'

const ResumeItem = (props) => {
    console.log(props.text);
    let text = props.text;
    return (
      <div className="resume-item table-container">
          <img className="resume-item-border table-tile" src={border} alt=""></img>
          <div className="resume-item-content table-tile">
            <div className="resume-title">{props.title}</div>
            <div className="resume-item-time">{props.time}</div>
            <ul className="text">
                {text.map((item) =>
                  <li key={item}>{item}</li>
                )}
            </ul>
          </div>
      </div>
    );
  };

const SkillItem = (props) => {
    let list = props.list;
    return(
        <div className="skill-item">
            <div className="resume-title">{props.title}</div>
            <img className="skill-item-icon" src={props.icon} alt=""></img>
            <div className="text">{props.text} </div>
            <ul className="text">
              {list.map((item) =>
                  <li key={item}>{item}</li>
              )}
            </ul>
        </div>
    );
};

const resume = [
  {
    title: "Design Director and Web Developer at ACM TeachLA",
    time: "2020 - Present",
    text: ["Design: lead designer for all projects, provide design critiques and training sessions for 50+ person team", 
            "Development: contribute to front-end development of interactive learning modules using React library, focus on user interface"]
  },
  {
    title: "Design Contributor at Daily Bruin",
    time: "2020 - Present",
    text: ["Design web mockups, magazine spreads, and social media posts for the top daily newspaper at a four-year college"]
  },
  {
    title: "Marketing Coordinator at Alumni Scholars Association",
    time: "2021 - Present",
    text: []
  },
  {
    title: "Graphic Designer at FAST Magazine",
    time: "2021 - Present",
    text: []
  },
  {
    title: "Web Development and Marketing Intern at Patent Sketch LLC",
    time: "Summer 2021",
    text: ["Brand redesign: designed and developed new website, created corresponding marketing assets",
          "Social media: analyzed web traffic patterns, compiled content ideas, researched and utilzed relevant keywords",
          "Sales outreach: compiled list of 200+ potential clients and marketed product to them"]
  },
  {
    title: "Computer Science Instructor at Juni Learning",
    time: "2020 - Present",
    text: ["Teach Scratch, Python, JavaScript, HTML/CSS, and Java in 1-on-1 computer science sessions with students age 7-16"]
  },
  {
    title: "Biochemical Research Intern at San Jose State University",
    time: "Summer 2019",
    text: ["Used skills in graphics programs to develop method of quantifying waviness of layers in cell images through automated image analysis", 
            "Co-author on Stanford-based research paper"]
  }
]

const skills = [
  {
    title: "languages",
    icon: langicon,
    text: "These are the languages I can code in.",
    list: ["Python (Webscraping/webcrawling)", "C++", "Java", "JavaScript (React/React Native)", "HTML/CSS"]
  },
  {
    title: "programs",
    icon: progicon,
    text: "I know my way around these programs.",
    list: ["Adobe Suite (Photoshop, Illustrator, Animate, After Effects, InDesign)", "Figma", "Blender", "AutoCAD"]
  },
  {
    title: "miscellaneous",
    icon: miscicon,
    text: "Here are just some extra things I know how to do!",
    list: ["Web Design and Development", "2D Animation/3D Modelling", "Photo Manipulation", "Vector Illustration"]
  }
]

const Resume = () => {

  return (
    <div className="resume frame">
        <div className="heading">skills &amp; experience</div>
        <div className="resume-heading">work experience</div>
        <div className="resume-content">
            {resume.map((item) => {
              return <ResumeItem key={item.title} title={item.title} time={item.time} text={item.text}></ResumeItem>
            })}
        </div>
        <div className="resume-heading">what i'm good at</div>
        <div className="skill-content">
            {skills.map((item) => {
              return <SkillItem key={item.title} title={item.title} icon={item.icon} text={item.text} list={item.list}></SkillItem>
            })}
        </div>
    </div>
    
  );
};

export default Resume;