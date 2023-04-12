import React from 'react';
import { CurrentUserContext } from './contexts/CurrentUserContext';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

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
        <button type="button" name="reactionButton" className={`element__reaction-button ${isLiked && 'element__reaction-button_activ'}`}></button>
        <p className="element__like-counter">{props.card.likes.length}</p>
      </div>
      {isOwn && <button type="button" name="buttonTrash" className="element__trash-button" onClick={props.onDeleteClick}></button>}
    </article>
  )
}
