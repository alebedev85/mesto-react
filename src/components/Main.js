import React from 'react';
import avatar from '../images/Avatar.jpg';
import { api } from '../utils/Api';

export default function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getCurrentUser()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar)
    })
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
      </section>
    </main>
  )
}