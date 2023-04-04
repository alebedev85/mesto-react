import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false); //State for EditProfilePopup
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false); //State for AddPlacePopupOpen
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false); //State for EditAvatarPopupOpen
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false); //State for DeleteCardPopupOpen
  const [selectedCard, setSelectedCard] = React.useState({}); //State for selected card for ImagePopup

  /**
   * Handler for avatar edit popup.
   * Changing state isEditAvatarPopupOpen.
   */
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  /**
  * Handler for edit profile popup.
  * Changing state isEditProfilePopupOpen.
  */
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  /**
  * Handler for add new place popup.
  * Changing state isAddPlacePopupOpen.
  */
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  /**
  * Handler for image popup.
  * Changing state selectedCard.
  * * @param {object} card - odject with card info.
  */
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  /**
  * Close all popups
  */
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
        buttonText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <>
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
        </>
      </PopupWithForm>
      <PopupWithForm
        name={'add-new-card'}
        title={'Новое место'}
        buttonText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <>
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
        </>
      </PopupWithForm>
      <PopupWithForm
        name={'edit-avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <>
          <div className="popup__field">
            <input id="avatar-input" className="popup__input popup__input_input_link" type="url"
              placeholder="Ссылка на картинку" name="avatar" required />
            <span className="popup__input-error avatar-input-error"></span>
          </div>
        </>
      </PopupWithForm>
      <PopupWithForm
        name={'delete-card'}
        title={'Вы уверены?'}
        buttonText={'Да'}
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups} />
      <ImagePopup
        name={'picture'}
        card={selectedCard}
        onClose={closeAllPopups} />
    </div>
  );
}

export default App;
