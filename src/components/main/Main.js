import React, { useState, useEffect } from "react";
import "./Main.css";
import { api } from "../utils/Api";
import Card from "../card/Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardList]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        const usersCard = cardList.map((card) => {
          return {
            name: card.name,
            link: card.link,
            likes: card.likes,
            cardId: card._id,
          };
        });
        setCards(usersCard);
      })
      .catch((err) => {
        err.then((res) => {
          alert(res.message);
        });
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__circle" onClick={onEditAvatar}>
          <img
            className="profile__avatar-image"
            src={userAvatar}
            alt="Аватар профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="gallery">
        <ul className="gallery__grid">
          {cards.map((card) => {
            return (
              <Card key={card.cardId} card={card} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
