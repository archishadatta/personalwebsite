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
    tags: ["Web Design", "Web Development", "Learning Lab"],
    text: "Buffer Buffet is an interactive assembly code simulator that allows the user to step through different segments of assembly code and watch how the different registers change.",
    me: "User Interface, Design & Prototype",
    link: "https://bufferbuffet-simulator.uclaacm.com/"
  },
  {
    img: two,
    title: "Heart and Sole",
    tags: ["Web Design"],
    text: "Heart and Sole is a Daily Bruin feature story exploring the culture and history of sneaker fans.",
    me: "Design & Prototype",
    link: "https://features.dailybruin.com/2021/sneakerheads/"
  },
  {
    img: three,
    title: "BoolBots",
    tags: ["Web Design", "Web Development", "Learning Lab", "Work in Progress"],
    text: "BoolBots is a game designed to teach students the basics of booleans in Python. They encounter many different boolean bots as they move through the levels.",
    me: "User Interface, Design & Prototype",
    link: "https://github.com/uclaacm/boolbots"
  },
  {
    img: four,
    title: "Color Lab",
    tags: ["Web Design", "Web Development", "Learning Lab", "Work in Progress"],
    text: "Color Lab is an interactive color-by-number page that teaches students about how colors are represented with hex codes. For each question they answer, another piece of the picture is colored in!",
    me: "Everything!",
    link: "https://www.figma.com/proto/RxdhEuoPBrUE3oYCPEwP3M/color-lab?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&hide-ui=1"
  },
  {
    img: five,
    title: "The Giving Tree",
    tags: ["Web Design", "Web Development",],
    text: "The Giving Tree is an interactive retelling of one of my favorite childhood stories. This was a personal project I worked on with a friend.",
    me: "Contributed to design and development",
    link: "https://www.figma.com/proto/BFFZkQPsvWYQ2IXQkckqus/the-giving-tree-bloom?node-id=5%3A4&scaling=scale-down-width&page-id=0%3A1&hide-ui=1"
  },
  {
    img: six,
    title: "Patent Sketch",
    tags: ["Web Design", "Wordpress"],
    text: "This is the website I made as part of a rebranding project for my summer internship at Patent Sketch.",
    me: "Design & Prototype, Development on Wordpress",
    link: "https://www.figma.com/proto/kwNMBfNL9MPqWPOjCJAa3j/Patent-Sketch-Website?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1&hide-ui=1"
  },
  {
    img: eight,
    title: "No Filter",
    tags: ["Web Design", "Learning Lab", "Work in Progress"],
    text: "No Filter is an interactive exploration of convolutional neural networks designed for students in high school and college.",
    me: "Design & Prototype, Minor Styling",
    link: "https://nofilter.uclaacm.com/"
  },
  {
    img: seven,
    title: "This Website",
    tags: ["Web Design", "Web Development"],
    text: "This one should be obvious.",
    me: "Everything!",
    link: ""
  },
  {
    img: nine,
    title: "Tiktok Famous",
    tags: ["Graphic Design", "Social Media"],
    text: "This is a series of Instagram stories designed to promote a Daily Bruin story about students gaining fame on TikTok. The design is inspired by the TikTok interface.",
    me: "Everything!",
    link: "https://www.figma.com/proto/dafuSYVBtFEmarmYkeK1gr/a-and-e.theatertiktok?node-id=2%3A0&scaling=scale-down&page-id=0%3A1&hide-ui=1"
  },
  {
    img: ten,
    title: "Year in Review",
    tags: ["Graphic Design", "Social Media"],
    text: "This is a series of Instagram stories highlighting top stories published by the Daily Bruin in 2020. The design is inspired by Spotify Wrapped.",
    me: "Everything!",
    link: "https://www.figma.com/proto/Mn5Mr8a9VlkK1pHIE7Oxg9/yearinreview?node-id=3%3A137&scaling=scale-down&page-id=0%3A1&hide-ui=1"
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
                  <span className="portfolio-tag" key={item}>{item}</span>
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
        <div className="text">This is a collection of some of my favorite work! Click to see the full projects.</div>
        <div className="portfolio">
            {portfolio.map((item) => {
              return <PortfolioItem key={item.title} img={item.img} title={item.title} tags={item.tags} text={item.text} me={item.me} link={item.link}></PortfolioItem>
            })}
        </div>
    </div>
  );
};

export default Work;