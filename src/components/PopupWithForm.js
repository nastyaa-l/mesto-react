import React from 'react'

class PopupWithForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return (
        <div className={this.props.isOpen ? (`popup__overlay popup__overlay_active popup__overlay_${this.props.name}`) :(`popup__overlay popup__overlay_${this.props.name}`)}>
          <div className="popup__content popup__content_edit">
            <h2 className="popup__subscription">{this.props.title}</h2>
            <form className={`popup__form popup__form_${this.props.name}`} name={`${this.props.name}`} noValidate>
            {this.props.children}
            </form>
            <button className="popup__button-close popup__button-close_close-edit" type="button" onClick={this.props.onClose}></button>
          </div>
        </div>
      )

  }
}

export default PopupWithForm;
