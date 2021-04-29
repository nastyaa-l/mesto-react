import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const name = React.useRef("");
  const link = React.useRef("");
  const [nameValid, setNameValid] = React.useState(false);
  const [linkValid, setLinkValid] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  function handleNameValid(e) {
    setNameValid(name.current.validity.valid);
  }

  function handleLinkValid(e) {
    setLinkValid(link.current.validity.valid);
  }

  React.useEffect(() => {
    if (nameValid && linkValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameValid, linkValid]);

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name.current.value,
      link: link.current.value,
    });
    name.current.value = "";
    link.current.value = "";
    setFormValid(false);
  }
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleAddPlaceSubmit}
      disabled={!formValid}
      formValid={formValid}
      button="Создать"
    >
      <input
        type="text"
        id="element-name"
        className={
          formValid
            ? "popup__input popup__input_element_name"
            : "popup__input popup__input_element_name popup__input_active"
        }
        name="element-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        ref={name}
        onChange={handleNameValid}
        required
      />
      <span
        className={
          formValid
            ? "popup__input-error element-name-error"
            : "popup__input-error element-name-error popup__input-error_active"
        }
      >
        {name.current.validationMessage}
      </span>
      <input
        type="url"
        id="element-link"
        className={
          formValid
            ? "popup__input popup__input_element_link"
            : "popup__input popup__input_element_link popup__input_active"
        }
        name="element-link"
        placeholder="Ссылка на картинку"
        ref={link}
        onChange={handleLinkValid}
        required
      />
      <span
        className={
          formValid
            ? "popup__input-error element-name-error"
            : "popup__input-error element-name-error popup__input-error_active"
        }
      >
        {link.current.validationMessage}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
