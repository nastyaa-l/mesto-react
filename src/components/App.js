import React from "react";
import "../pages/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from '../utils/api';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setEditPopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getDatas()
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => {
      console.log('Ошибка в получении данных с сервера', err)
    })
  }, [])

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
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
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
      ></Main>
      <Footer />
      <section className="popup">
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} button="Сохранить">
          <input
            type="text"
            id="popup__name"
            className="popup__input popup__input_form_name"
            name="profileName"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            required
          />
          <span className="popup__input-error popup__name-error"></span>
          <input
            type="text"
            id="popup__subscription"
            className="popup__input popup__input_form_subscription"
            name="profileSub"
            minLength="2"
            maxLength="400"
            placeholder="О себе"
            required
          />
          <span className="popup__input-error popup__subscription-error"></span>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} button="Создать">
          <input
            type="text"
            id="element-name"
            className="popup__input popup__input_element_name"
            name="element-name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error element-name-error"></span>
          <input
            type="url"
            id="element-link"
            className="popup__input popup__input_element_link"
            name="element-link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error element-link-error"></span>
        </PopupWithForm>
        <PopupWithForm name="confirm" title="Вы уверены?" button="Да">
        </PopupWithForm>
        <PopupWithForm name="update" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} button="Сохранить">
          <input
            type="url"
            id="profileUrl"
            className="popup__input popup__input_update"
            name="profileUrl"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error profileUrl-error"></span>
        </PopupWithForm>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </section>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

