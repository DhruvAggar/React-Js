import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{}</p>
        <h2 className="name">{props.name}</h2>
        <img src={props.img} alt="Contact-img" />
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
