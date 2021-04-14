function ImagePopup(props) {
  return(

  <div className={props.card ? (`popup__overlay popup__overlay_active popup__overlay_image-popup`) : (`popup__overlay popup__overlay_image-popup`)}>
    <div className="popup__content popup__content_image">
    <figure className ="popup__container">
      <img className="popup__image" alt="изображение места" src={props.card.link}/>
      <figcaption className ="popup__caption">{props.card.name}</figcaption>
      <button className="popup__button-close popup__button-close_close-image" type="button" onClick={props.onClose}></button>
    </figure>
    </div>
  </div>
  )
}

export default ImagePopup;
