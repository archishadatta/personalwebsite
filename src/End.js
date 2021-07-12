import React from 'react';
import './End.css';

const EndItem = (props) => {
    let list = props.list;
    return (
        <div className="end-item">
            <div className="end-title">{props.title}</div>
            {/* <div className="text">{props.text} </div> */}
            <ul className="text">
                {list.map((item) =>
                  <li key={item}>{item}</li>
                )}
            </ul>
        </div>
    );
};

const endList = [
    {
      title: "fun facts",
      list: ["I took five years of French in high school! That means I can speak well enough to order a croissant but not well enough that I won't get laughed at for trying. Oh, and I also speak Bengali.",
             "I first discovered Photoshop at the impressionable young age of eleven. I've been making things with computers ever since.", 
             "I can play viola and flute and I absolutely hate running. Those two facts are related because I once joined marching band without knowing how to play any band instrument just because I didn't want to run the mile in P.E."
            ]
    },
    {
      title: "favorites",
      list: ["Books: Interpreter of Maladies by Jhumpa Lahiri, Stone Butch Blues by Leslie Feinberg, The Bell Jar by Sylvia Plath, Poetry of Sappho by Sappho, The Very Hungry Caterpillar by Eric Carle",
             "Songs: \"Fast Car\" by Tracy Chapman, \"Like Real People Do\" by Hozier, \"Billie Jean\" by Michael Jackson",
             "Movies: West Side Story, Jennifer's Body, The Shining, Mamma Mia", 
             "Languages: Java and C++. Sorry Python and JavaScript, but I'm a big advocate of semicolons."
            ]
    },
    {
      title: "nerdy pickup lines",
      list: ["Are you the square root of negative one? Because you're so awesome, you must be imaginary!",
             "Roses are #FF0000, violets are #0000FF. All my love belongs to you.",
             "Are you a double? The thought of you always floats inside my head.", 
             "You must be a loop condition, because I keep coming back to you.",
            ]
    }
    
  ]
  

const End = () => {

  function surprise () {
    console.log("surprise!")
  }

  return (
    <div className="end frame">  
        <div className="heading">odds &amp; ends</div>
        <div className="text">You've made it to the end of my website. I'm glad you're still here! Here are some interesting things, you know, to gain some personality points and whatnot.</div>
        <div className="end-item-container">
            {endList.map((item) => {
              return <EndItem key={item.title} title={item.title} list={item.list}></EndItem>
            })}
        </div>
        <br></br>
        <button className="surprise-button" onClick={surprise}>click for a surprise</button>
    </div>
    
  );
};

export default End;