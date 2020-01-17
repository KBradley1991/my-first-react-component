import React, { Component } from "react";

function Card(props) {
  return (
    <div className="card hoverable small">
      <div className="card-image">
        <img src={props.card.image} alt="" />
      </div>
      <div className="card-content">
        <p>{props.card.course}</p>
        <p>{props.card.instructor}</p>
      </div>
      <div className="card-action">
        <a href="#">$9.99</a>
      </div>
    </div>
  );
}

export default Card;
