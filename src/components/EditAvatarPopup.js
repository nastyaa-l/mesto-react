import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatar = React.useRef("");
  const [formValid, setFormValid] = React.useState(false);

  function handleFormValid() {
    setFormValid(avatar.current.validity.valid);
  }

  function handleClear() {
    avatar.current.value = "";
    setFormValid(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatar.current.value,
    }, handleClear);
  }

  return (
    <PopupWithForm
      name="update"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      disabled={!formValid}
      formValid={formValid}
      button="Сохранить"
    >
      <input
        type="url"
        id="profileUrl"
        className={`popup__input popup__input_update ${formValid ? "" : "popup__input_active"}`}
        name="profileUrl"
        placeholder="Ссылка на картинку"
        ref={avatar}
        onChange={handleFormValid}
        required
      />
      <span className={`popup__input-error profileUrl-error ${formValid ? "" : "popup__input-error_active"}`}
      >
        {avatar.current.validationMessage}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
