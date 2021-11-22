import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState({
    name: "matirx",
    place: "Space",
    degree: "Neo",
  });
  const updateData = () => {
    setText({
      ...text,
      // name: "react",
      place: "developer",
      degree: "javascipt",
    });
  };

  return (
    <div className="main-dev">
      <div className="child-div">
        <h1> Handling Objects in React Hooks ...spread operator </h1>
        <h1>{text.name}</h1>
        <h1>{text.place}</h1>
        <h1>{text.degree}</h1>

        <button onClick={updateData}> Change here </button>
      </div>
    </div>
  );
};

export default App;
