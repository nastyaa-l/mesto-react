function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img className="element__picture" alt={card.name} src={card.link} onClick={handleClick} />
      <button className="element__bin" type="button"></button>
      <div className="element__name-content">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-content">
          <button className="element__like" type="button"></button>
          <p className="element__like-num">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
