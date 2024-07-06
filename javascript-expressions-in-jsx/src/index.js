import React from "react";
import ReactDOM from "react-dom";

const yourname = "Dhruv";
//Date is object and call method getfullyear
const currentyear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {yourname}</p>
    <p>Copyright {currentyear}</p>
  </div>,
  document.getElementById("root")
);
