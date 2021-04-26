import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../context/CurrentUserContext";

function EditProfilePopup(props){

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])

  function handleName(e){
    setName(e.target.value)
  }

  function handleDescription(e){
    setDescription(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    })
  }

 return (
  <PopupWithForm name="edit" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} button="Сохранить" onSubmit={handleSubmit}>
  <input
    type="text"
    id="popup__name"
    className="popup__input popup__input_form_name"
    name="profileName"
    minLength="2"
    maxLength="40"
    placeholder="Имя"
    value={name}
    onChange={handleName}
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
    value={description}
    onChange={handleDescription}
    required
  />
  <span className="popup__input-error popup__subscription-error"></span>
</PopupWithForm>
 )
}

export default EditProfilePopup;
