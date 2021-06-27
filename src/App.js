import './App.css';
import Scrollspy from 'react-scrollspy'
import {Parallax, Background} from "react-parallax"

import Landing from "./Landing"
import About from "./About"
import Work from "./Work"
import Resume from "./Resume"
import End from "./End"

import Contact from './Contact'

import bg1 from './background_1.png'
import bg2 from './background_2.png'


// to do: hamburger menu on small screen, surprise game

function App() {

  return (
    <div className="App">
      <Parallax blur={0} bgImage={bg1} bgImageAlt="" strength={200}>
          <Landing></Landing>   
      </Parallax>

      <Scrollspy className="menu" items={ ['section-1', 'section-2', 'section-3', 'section-4'] } currentClassName="is-current">
        <a className="menuItem" href="#section-1">about me</a>
        <a className="menuItem" href="#section-2">my work</a>
        <a className="menuItem" href="#section-3">skills &amp; experience</a>
        <a className="menuItem" href="#section-4">odds &amp; ends</a>
      </Scrollspy>

      <section id="section-1">
        <About></About>
      </section>

      <Parallax blur={0} bgImage={bg2} bgImageAlt="" strength={1200}>
        <section id="section-2">
          <Work></Work>
        </section>
      </Parallax>
     
      <section id="section-3">
        <Resume></Resume>
      </section>
      
      <Parallax blur={0} bgImage={bg2} bgImageAlt="" strength={200}>
        <section id="section-4">
          <End></End>
        </section>
      </Parallax>

      <div className="footer">
          <Contact bevel="false"></Contact>
          <div className="footer-text">made by me!</div>
      </div>

    </div>
  );
}

export default App;
