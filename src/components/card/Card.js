import React from "react";
import "./Card.css";

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <button className="card__delete-button" type="button"></button>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <h2 className="card__title">{card.name}</h2>
      <button className="card__choise-button" type="button"></button>
      <span className="card__number-likes">{card.likes.length}</span>
    </li>
  );
}
export default Card;
