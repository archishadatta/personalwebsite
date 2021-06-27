import React from 'react';
import './Work.css';

import img1 from './bufferbuffet.png'

const portfolio = [
  {
    img: img1,
    title: "title 1",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: img1,
    title: "title 1",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: img1,
    title: "title 1",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: img1,
    title: "title 1",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: img1,
    title: "title 1",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: img1,
    title: "title 1",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  }
]

const PortfolioItem = (props) => {
    let tags = props.tags;
    return (
      <a className="portfolioItem" target="_blank" href={props.link}>

          <img className="portfolio-image" src={props.img} alt="first"></img>

          <div className="portfolio-title">{props.title}</div>
          
          <div className="portfolio-tag-section">
            {tags.map((item) =>
                  <div className="portfolio-tag" key={item}>{item}</div>
            )}
          </div>
          <div className="portfolio-description portfolio-text">{props.text}</div>
          <br></br>
          <div className="portfolio-contribution portfolio-text">
              <span className="portfolio-contribution-label">What I Did: </span>
                {props.me}
        </div>
      </a>
    );
  };

const Work = () => {
  return (
    <div className="work frame">
        <div className="heading">my work</div>
        <div className="portfolio">
            {portfolio.map((item) => {
              return <PortfolioItem key={item.title} img={item.img} title={item.title} tags={item.tags} text={item.text} me={item.me} link={item.link}></PortfolioItem>
            })}
        </div>
    </div>
  );
};

export default Work;