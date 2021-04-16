import React from "react";
import "../pages/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditPopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      ></Main>
      <Footer />
      <section className="popup">
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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
          <button type="submit" className="popup__submit popup__submit_form-edit">
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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
          <span classNamelass="popup__input-error element-link-error"></span>
          <button type="submit" className="popup__submit popup__submit_form-add">
            Создать
          </button>
        </PopupWithForm>
        <PopupWithForm name="confirm" title="Вы уверены?">
          <button type="button" className="popup__submit popup__submit_confirm">
            Да
          </button>
        </PopupWithForm>
        <PopupWithForm name="update" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input
            type="url"
            id="profileUrl"
            className="popup__input popup__input_update"
            name="profileUrl"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error profileUrl-error"></span>
          <button type="submit" className="popup__submit popup__submit_update">
            Сохранить
          </button>
        </PopupWithForm>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </section>
    </div>
  );
}

export default App;


