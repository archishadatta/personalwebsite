import React from 'react';
import './Work.css';

import one from './bufferbuffet.png'
import two from './Sneakerhead.png'
import three from './BoolBots.png'
import four from './Color Lab.png'
import five from './Giving Tree.png'
import six from './Patent Sketch.png'
import seven from './personal website.png'
import eight from './no filter.png'
import nine from './tiktok.png'
import ten from './year in review.png'

const portfolio = [
  {
    img: one,
    title: "Buffer Buffet",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: two,
    title: "Sneaker Culture",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: three,
    title: "BoolBots",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: four,
    title: "Color Lab",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: five,
    title: "The Giving Tree",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: six,
    title: "Patent Sketch",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: seven,
    title: "This Website",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: eight,
    title: "No Filter",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: nine,
    title: "Tiktok Famous",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  {
    img: ten,
    title: "Year in Review",
    tags: ["tag 1", "tag 2"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
    me: "User Interface, Design & Prototype",
    link: "https://www.google.com/"
  },
  
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