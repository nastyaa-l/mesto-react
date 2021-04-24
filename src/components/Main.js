import React from "react";
import Card from "./Card";
import api from "../utils/api";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props) {
  const user = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getCards()
    .then((res) => {
      setCards(res)
    })
    .catch((err) => {
      console.log('Ошибка в получении данных с сервера', err)
    })
  }, [])

 function handleCardLike(card){
   const isLiked = card.likes.some(i => i._id === user._id);

   api.changeLikeCardStatus(card._id, isLiked)
   .then((newCard) =>
   {
    setCards((state) => state.map((c) => c._id === card._id ? newCard : c)
)})
   .catch(err => console.log('Ошибка в постановке лайка', err))
 }

  function handleCardDelete(card){
    const isOwn = card.owner._id === user._id;

    if(isOwn){
      api.deleteDatas(card._id)
      .then((newCard) => {
        setCards((state) => state.filter((c) => c._id !== card._id)
        )
      })
    .catch((err) => {
      console.log('Ошибка в удалении карточки', err)
    })
    }

    else{
      console.log('Невозможно удалить')
    }

  }

  return (
    <CurrentUserContext.Provider value={user}>
    <main className="content">
      <section className="profile section content__profile">
        <div className="profile__content">
          <img className="profile__avatar" alt="Аватар профиля" src={user.avatar} />
          <button onClick={props.onEditAvatar} className="profile__avatar-edit" type="button"></button>
          <div className="profile__info">
            <h1 className="profile__name">{user.name}</h1>
            <button onClick={props.onEditProfile} className="profile__edit-button" type="button"></button>
            <p className="profile__subscription">{user.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button"></button>
      </section>
      <section className="elements section content__elements">
        <ul className="elements__items">
          {cards.map((card) => (
            <Card key={card._id} onCardClick={props.onCardClick} card={card} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          ))}
        </ul>
      </section>
    </main>
    </CurrentUserContext.Provider>
  );
}

export default Main;

