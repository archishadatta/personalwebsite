import React from 'react';
import './End.css';

const EndItem = (props) => {
    let list = props.list;
    return (
        <div className="end-item">
            <div className="end-title">{props.title}</div>
            <div className="text">{props.text} </div>
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
      title: "title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
      list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]
    },
    {
      title: "title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
      list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]
    },
    {
      title: "title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet.",
      list: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]
    }
  ]
  

const End = () => {

  return (
    <div className="end frame">  
        <div className="heading">odds &amp; ends</div>
        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in.</div>
        <div className="end-item-container">
            {/* <EndItem></EndItem>
            <EndItem></EndItem>
            <EndItem></EndItem>
            <EndItem></EndItem> */}
            {endList.map((item) => {
              return <EndItem key={item.title} title={item.title} text={item.text} list={item.list}></EndItem>
            })}
        </div>
    </div>
    
  );
};

export default End;