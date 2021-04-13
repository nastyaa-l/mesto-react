function Card (props) {

  function handleClick() {
    props.onCardClick(props.card);
    console.log(props.card)
    //console.log(props.onCardClick(props.card))
    //props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img className="element__picture" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
      <button className="element__bin" type="button"></button>
      <div className="element__name-content">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-content">
          <button className="element__like" type="button"></button>
          <p className="element__like-num">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
