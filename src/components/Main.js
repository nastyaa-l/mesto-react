import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userData, setUserData] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getDatas()
    .then((res) => {
      setUserData(res);
    })
    .catch((err) => {
      console.log('Ошибка в получении данных с сервера', err)
    })
  }, []);

  React.useEffect(() => {
    api.getCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log('Ошибка в получении данных с сервера', err)
    })
  }, []);

  return (
    <main className="content">
      <section className="profile section content__profile">
        <div className="profile__content">
          <img className="profile__avatar" alt="Аватар профиля" src={userData.avatar} />
          <button onClick={props.onEditAvatar} className="profile__avatar-edit" type="button"></button>
          <div className="profile__info">
            <h1 className="profile__name">{userData.name}</h1>
            <button onClick={props.onEditProfile} className="profile__edit-button" type="button"></button>
            <p className="profile__subscription">{userData.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button"></button>
      </section>
      <section className="elements section content__elements">
        <ul className="elements__items">
          {cards.map((card) => (
            <Card key={card._id} onCardClick={props.onCardClick} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

