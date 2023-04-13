import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddNewPlace }) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  /**
     * Hendler for place name input
     * */
  function handlePlaceNameChange(e) {
    setName(e.target.value);
  }

  /**
   * Hendler for place link input
   * */
  function handlePlaceLinkChange(e) {
    setLink(e.target.value);
  }

  /**
   * Hendler for EditAvatarPopup form submit
   * */
  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddNewPlace({ name: name, link: link });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      name={'add-new-card'}
      title={'Новое место'}
      buttonText={'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}>
      <>
        <div className="popup__field">
          <input id="place-input" className="popup__input popup__input_input_place" type="text"
            placeholder="Название" name="cardNameImput" minLength="2" maxLength="30" value={name} onChange={handlePlaceNameChange} required />
          <span className="popup__input-error place-input-error"></span>
        </div>
        <div className="popup__field">
          <input id="link-input" className="popup__input popup__input_input_link" type="url"
            placeholder="Ссылка на картинку" name="cardLinkImput" value={link} onChange={handlePlaceLinkChange} required />
          <span className="popup__input-error link-input-error"></span>
        </div>
      </>
    </PopupWithForm>
  )
}