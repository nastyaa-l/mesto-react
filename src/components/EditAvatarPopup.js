import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatar = React.useRef("");
  const [formValid, setFormValid] = React.useState(false);

  function handleFormValid() {
    setFormValid(avatar.current.validity.valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatar.current.value,
    });
    avatar.current.value = "";
    setFormValid(false);
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
        className={
          formValid ? "popup__input popup__input_update" : "popup__input popup__input_update popup__input_active"
        }
        name="profileUrl"
        placeholder="Ссылка на картинку"
        ref={avatar}
        onChange={handleFormValid}
        required
      />
      <span
        className={
          formValid
            ? "popup__input-error profileUrl-error"
            : "popup__input-error profileUrl-error popup__input-error_active"
        }
      >
        {avatar.current.validationMessage}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
