// const React = require("react");
// const ReactDOM = require("react-dom");

// this is similar to the require function used to import
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);
// ReactDOM.render(ONLY ONE HTML TAG CAN BE ACCESSED, GET ELEMENT FROM THE HTML PAGE NAME ROOT FOR SCRIPT)
const name = "Dhruv";
const number = 6;
ReactDOM.render(
  <div>
    {/* <h1>Favourite Food</h1>
    <ul>
      <li>Burger</li>
      <li>Pasta</li>
      <li>Pizza</li>
    </ul> */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {name}!
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
