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
      <div className="resume-item">
          <img className="resume-item-border" src={border} alt=""></img>
          <div className="resume-item-content">
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
    title: "title 1",
    time: "time 1",
    text: ["hello", "my", "name"]
  },
  {
    title: "title 2",
    time: "time 2",
    text: ["look", "an", "airplane", "woah"]
  },
  {
    title: "title 3",
    time: "time 3",
    text: ["im", "making", "a", "website!!"]
  }
]

const skills = [
  {
    title: "languages",
    icon: langicon,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]
  },
  {
    title: "programs",
    icon: progicon,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]
  },
  {
    title: "miscellaneous",
    icon: miscicon,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]
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
            {/* <SkillItem title="languages" image={langicon}></SkillItem>
            <SkillItem title="programs" image={progicon}></SkillItem>
            <SkillItem title="miscellaneous" image={miscicon}></SkillItem> */}
            {skills.map((item) => {
              return <SkillItem key={item.title} title={item.title} icon={item.icon} text={item.text} list={item.list}></SkillItem>
            })}
        </div>
    </div>
    
  );
};

export default Resume;