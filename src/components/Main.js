import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

export default function Main(props) {
  const [userName, setUserName] = React.useState(''); //State for user name
  const [userDescription, setUserDescription] = React.useState(''); //State for user description
  const [userAvatar, setUserAvatar] = React.useState(''); //State for user anatar
  const [cards, setCards] = React.useState([]); //State for cards

  React.useEffect(() => {
    //Get user info
    api.getCurrentUser()
      .then((res) => {
        setUserName(res.name); //Set name
        setUserDescription(res.about); //Set description
        setUserAvatar(res.avatar) //set avatar
      })
      .catch(err => {
        console.log(err);
      })

    //Get cards
    api.getCards()
      .then((res) => setCards(res))
      .catch(err => {
        console.log(err);
      });
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
          cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick} />)
        }
      </section>
    </main>
  )
}
