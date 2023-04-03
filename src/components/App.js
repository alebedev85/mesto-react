import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onClose={closeAllPopups}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        name={'edit-profile'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <form className="popup__form" name="formEditProfile" noValidate>
          <fieldset className="popup__fieldset">
            <div className="popup__field">
              <input id="name-input" className="popup__input popup__input_input_name" type="text" placeholder="Ваше имя"
                name="inputName" minLength="2" maxLength="40" required />
              <span className="popup__input-error name-input-error"></span>
            </div>
            <div className="popup__field">
              <input id="job-input" className="popup__input popup__input_input_job" type="text" placeholder="Ваше занятие"
                name="inputJob" minLength="2" maxLength="200" required />
              <span className="popup__input-error job-input-error"></span>
            </div>
            <button className="popup__save-button" type="submit" name="saveButton">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={'add-new-card'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <form className="popup__form" name="formAddCard" noValidate>
          <fieldset className="popup__fieldset">
            <div className="popup__field">
              <input id="place-input" className="popup__input popup__input_input_place" type="text"
                placeholder="Название" name="cardNameImput" minLength="2" maxLength="30" required />
              <span className="popup__input-error place-input-error"></span>
            </div>
            <div className="popup__field">
              <input id="link-input" className="popup__input popup__input_input_link" type="url"
                placeholder="Ссылка на картинку" name="cardLinkImput" required />
              <span className="popup__input-error link-input-error"></span>
            </div>
            <button className="popup__save-button" type="submit" name="saveButton">Создать</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={'edit-avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <form className="popup__form" name="formEditAvatar" noValidate>
          <fieldset className="popup__fieldset">
            <div className="popup__field">
              <input id="avatar-input" className="popup__input popup__input_input_link" type="url"
                placeholder="Ссылка на картинку" name="avatar" required />
              <span className="popup__input-error avatar-input-error"></span>
            </div>
            <button className="popup__save-button" type="submit" name="saveButton">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={'delete-card'}
        title={'Вы уверены?'}
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}>
        <form className="popup__form popup__form_type_delete" name="formDeleteCard" noValidate>
          <fieldset className="popup__fieldset">
            <button className="popup__save-button" type="submit" name="saveButton">Да</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <ImagePopup
        name={'picture'}
        card={selectedCard}
        onClose={closeAllPopups} />
    </div>
  );
}

export default App;
