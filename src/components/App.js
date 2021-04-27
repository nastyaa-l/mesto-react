import React from "react";
import "../pages/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ConfirmPopup from "./ConfirmPopup";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../context/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditPopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);
  const [cardToDelete, setCardToDelete] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getDatas()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log("Ошибка в получении данных с сервера", err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log("Ошибка в получении данных с сервера", err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log("Ошибка в постановке лайка", err));
  }

  function handleCardDelete() {
    const card = cardToDelete;
    const isOwn = card.owner._id === currentUser._id;

    if (isOwn) {
      api
        .deleteDatas(card._id)
        .then((newCard) => {
          setCards((state) => state.filter((c) => c._id !== card._id));
        })
        .then(() => {
          closeAllPopups();
        })
        .catch((err) => {
          console.log("Ошибка в удалении карточки", err);
        });
    } else {
      console.log("Невозможно удалить");
    }
  }

  function handleSetCardDelete(card) {
    setCardToDelete(card);
  }

  function handleEditAvatarClick() {
    setAvatar(true);
  }

  function handleEditProfileClick() {
    setEditPopup(true);
  }

  function handleAddPlaceClick() {
    setAddPopup(true);
  }

  function closeAllPopups() {
    setEditPopup(false);
    setAddPopup(false);
    setAvatar(false);
    setCardToDelete(null);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(avatar) {
    api.patchAvatar(avatar).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  }

  function handleAddPlace(data) {
    api.postCards(data).then((newCard) => {
      setCards([newCard, ...cards]);
    });
    closeAllPopups();
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          onDeleteClick={handleSetCardDelete}
          cards={cards}
        ></Main>
        <Footer />
        <section className="popup">
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}></EditProfilePopup>
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}></AddPlacePopup>
          <ConfirmPopup isOpen={cardToDelete ? true : false} onClose={closeAllPopups} onDeleteCard={handleCardDelete}></ConfirmPopup>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}></EditAvatarPopup>
          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        </section>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;


