import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props){
  const avatar = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar : avatar.current.value,
    })
    avatar.current.value="";
  }

return(
  <PopupWithForm name="update" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} button="Сохранить">
          <input
            type="url"
            id="profileUrl"
            className="popup__input popup__input_update"
            name="profileUrl"
            placeholder="Ссылка на картинку"
            ref = {avatar}
            required
          />
          <span className="popup__input-error profileUrl-error"></span>
        </PopupWithForm>
)
}

export default EditAvatarPopup;
