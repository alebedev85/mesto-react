import React from 'react';
import { api } from '../utils/Api';

export default function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCurrentUser()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar)
      })
    api.getCards()
      .then((res) => setCards(res));
    console.log(cards)
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профаил">
        <div className="profile__card" >
          <button className="profile__edit-avatar-button" type="button" name="editNewAvater" onClick={props.onEditAvatar} >
            <img src={userAvatar} className="profile__avatar" alt="Фото профайла" />
            <div className="profile__avatar-blackout"></div>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
            <button className="profile__edit-button" type="button" name="editProfile" onClick={props.onEditProfile} />
          </div>
        </div>
        <button className="profile__add-button" type="button" name="editCard" onClick={props.onAddPlace} />
      </section>
      <section className="elements" aria-label="Картачки c фотографиями">
        {
          cards.map((card) => (
            <article className="element"key={card._id}>
              <img className="element__image" src={card.link} alt="" />
              <h2 className="element__title">{card.name}</h2>
              <div className="element__reaction-container">
                <button type="button" name="reactionButton" className="element__reaction-button"></button>
                <p className="element__like-counter">{card.likes.length}</p>
              </div>
              <button type="button" name="buttonTrash" className="element__trash-button"></button>
            </article>
          ))
        }
      </section>
    </main>
  )
}