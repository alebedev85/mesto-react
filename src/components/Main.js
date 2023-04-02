import avatar from '../images/Avatar.jpg';

export default function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    console.log('dfgdfgdgdfg')
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile" aria-label="Профаил">
        <div className="profile__card">
          <button className="profile__edit-avatar-button" type="button" name="editNewAvater" onClick={handleEditAvatarClick}>
            <img src={avatar} className="profile__avatar" alt="Фото профайла" />
            <div className="profile__avatar-blackout"></div>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__job">Исследователь океана</p>
            <button className="profile__edit-button" type="button" name="editProfile" onClick={handleEditProfileClick} />
          </div>
        </div>
        <button className="profile__add-button" type="button" name="editCard" onClick={handleAddPlaceClick}/>
      </section>
      <section className="elements" aria-label="Картачки c фотографиями">
      </section>
    </main>
  )
}