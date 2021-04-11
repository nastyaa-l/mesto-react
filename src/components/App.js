import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
    < Header />
    < Main />
    < Footer />
    <section className="popup">
      <div className="popup__overlay popup__overlay_edit-popup">
        <div className="popup__content popup__content_edit">
          <h2 className="popup__subscription">Редактировать профиль</h2>
          <form className="popup__form popup__form_edit" name="formedit" noValidate>
          <input type="text" id="popup__name" className="popup__input popup__input_form_name" name="profileName" minLength="2" maxLength="40" placeholder ="О себе" required />
          <span className="popup__input-error popup__name-error"></span>
          <input type="text" id="popup__subscription" className="popup__input popup__input_form_subscription" name="profileSub" minLength="2" maxLength="400" placeholder="Имя" required />
          <span className="popup__input-error popup__subscription-error"></span>
          <button type="submit" className="popup__submit popup__submit_form-edit">Сохранить</button>
          </form>
          <button className="popup__button-close popup__button-close_close-edit" type="button"></button>
        </div>
      </div>
      <div className="popup__overlay popup__overlay_add-popup">
        <div className="popup__content popup__content_add">
          <h2 className="popup__subscription">Новое место</h2>
          <form className="popup__form popup__form_add" name="form">
          <input type="text" id="element-name" className="popup__input popup__input_element_name" name="element-name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error element-name-error"></span>
            <input type="url" id ="element-link" className="popup__input popup__input_element_link" name="element-link" placeholder="Ссылка на картинку" required />
            <span classNamelass ="popup__input-error element-link-error"></span>
            <button type="submit" className="popup__submit popup__submit_form-add">Создать</button>
            </form>
            <button className="popup__button-close popup__button-close_close-add" type="button"></button>
        </div>
      </div>
      <div className="popup__overlay popup__overlay_image-popup">
        <div className="popup__content popup__content_image">
        <figure className ="popup__container">
          <img className="popup__image" alt="изображение места" />
          <figcaption className ="popup__caption"></figcaption>
          <button className="popup__button-close popup__button-close_close-image" type="button"></button>
          </figure>
        </div>
      </div>
         <div className="popup__overlay popup__overlay_confirm">
          <div className="popup__content popup__content_confirm">
            <h2 className="popup__subscription">Вы уверены?</h2>
            <form className="popup__form popup__form_confirm" name="form">
            <button type="button" className="popup__submit popup__submit_confirm">Да</button>
            </form>
            <button className="popup__button-close popup__button-close_close-confirm" type="button"></button>
          </div>
        </div>
        <div className="popup__overlay popup__overlay_update">
          <div className="popup__content popup__content_update">
            <h2 className="popup__subscription">Обновить аватар</h2>
            <form className="popup__form popup__form_update" name="form">
              <input type="url" id="profileUrl" className="popup__input popup__input_update" name="profileUrl" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error profileUrl-error"></span>
              <button type="submit" className="popup__submit popup__submit_update">Сохранить</button>
              </form>
            <button className="popup__button-close popup__button-close_close-update" type="button"></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
