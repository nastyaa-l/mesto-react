import React from 'react'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEditAvatarClick = () => {
    document.querySelector('.popup__overlay_update').classList.add('popup__overlay_active')
  };

  handleEditProfileClick = () => {
    document.querySelector('.popup__overlay_edit-popup').classList.add('popup__overlay_active')
  };

  handleAddPlaceClick = () => {
    document.querySelector('.popup__overlay_add-popup').classList.add('popup__overlay_active');
  };

  render() {
    return(
    <main className="content">
      <section className="profile section content__profile">
        <div className="profile__content">
          <img className="profile__avatar" alt="Аватар профиля" />
            <button onClick={this.handleEditAvatarClick} className="profile__avatar-edit" type="button"></button>
              <div className="profile__info">
                <h1 className="profile__name">Жак-Ив-Кусто</h1>
                <button onClick={this.handleEditProfileClick} className="profile__edit-button" type="button"></button>
                <p className="profile__subscription">Исследователь океана</p>
              </div>
        </div>
        <button onClick={this.handleAddPlaceClick} className="profile__add-button" type="button"></button>
      </section>
      <section className="elements section content__elements">
        <ul className="elements__items">
        </ul>
      </section>
    </main>
  )
}
}

export default Main;
