import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const [nameValid, setNameValid] = React.useState(true);
  const [descriptionValid, setDescriptionValid] = React.useState(true);
  const [formValid, setFormValid] = React.useState(true);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleName(e) {
    setName(e.target.value);
    setNameValid(e.target.validity.valid);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
    setDescriptionValid(e.target.validity.valid);
  }

  React.useEffect(() => {
    if (nameValid && descriptionValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameValid, descriptionValid]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
    setFormValid(true);
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      button="Сохранить"
      onSubmit={handleSubmit}
      disabled={!formValid}
      formValid={formValid}
    >
      <input
        type="text"
        id="popup__name"
        className={
          formValid ? "popup__input popup__input_form_name" : "popup__input popup__input_form_name popup__input_active"
        }
        name="profileName"
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        value={name}
        onChange={handleName}
        required
      />
      <span
        className={
          formValid
            ? "popup__input-error popup__name-error"
            : "popup__input-error popup__name-error popup__input-error_active"
        }
      ></span>
      <input
        type="text"
        id="popup__subscription"
        className={
          formValid
            ? "popup__input popup__input_form_subscription"
            : "popup__input popup__input_form_subscription popup__input_active"
        }
        name="profileSub"
        minLength="2"
        maxLength="400"
        placeholder="О себе"
        value={description}
        onChange={handleDescription}
        required
      />
      <span
        className={
          formValid
            ? "popup__input-error popup__subscription-error"
            : "popup__input-error popup__subscription-error popup__input-error_active"
        }
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

