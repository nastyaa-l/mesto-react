import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const name = React.useRef("");
  const link = React.useRef("");

  function handleAddPlaceSubmit(e){
    e.preventDefault();
    props.onAddPlace({
      name : name.current.value,
      link: link.current.value
    })
    name.current.value="";
    link.current.value="";
  }
  return (
    <PopupWithForm name="add" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleAddPlaceSubmit} button="Создать">
    <input
      type="text"
      id="element-name"
      className="popup__input popup__input_element_name"
      name="element-name"
      placeholder="Название"
      minLength="2"
      maxLength="30"
      ref={name}
      required
    />
    <span className="popup__input-error element-name-error"></span>
    <input
      type="url"
      id="element-link"
      className="popup__input popup__input_element_link"
      name="element-link"
      placeholder="Ссылка на картинку"
      ref={link}
      required
    />
    <span className="popup__input-error element-link-error"></span>
  </PopupWithForm>
  )
}

export default AddPlacePopup;
