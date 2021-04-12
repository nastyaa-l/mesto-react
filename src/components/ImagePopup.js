function ImagePopup() {
  return(
  <div className="popup__overlay popup__overlay_image-popup">
    <div className="popup__content popup__content_image">
    <figure className ="popup__container">
      <img className="popup__image" alt="изображение места" />
      <figcaption className ="popup__caption"></figcaption>
      <button className="popup__button-close popup__button-close_close-image" type="button"></button>
    </figure>
    </div>
  </div>
  )
}

export default ImagePopup;
