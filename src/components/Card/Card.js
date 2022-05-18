import React from "react";
import "./Card.css";

function Card({ name, img }) {
  return (
    <div className="card">
      <form className="cardForm">
        <img className="cardImg" src={img}></img>
        <h2 className="cardName">{name}</h2>
      </form>
    </div>
  );
}

export default Card;
