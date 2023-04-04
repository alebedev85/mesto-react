export default function Card(props) {
  /**
   * Handler for click on image
   */
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element">
      <img className="element__image" src={props.card.link} alt={`Фото ${props.card.name}`} onClick={handleClick} />
      <h2 className="element__title">{props.card.name}</h2>
      <div className="element__reaction-container">
        <button type="button" name="reactionButton" className="element__reaction-button"></button>
        <p className="element__like-counter">{props.card.likes.length}</p>
      </div>
      <button type="button" name="buttonTrash" className="element__trash-button"></button>
    </article>
  )
}
