import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from './contexts/CurrentUserContext';

export default function EditAvatarPopup({ isOpen, onClose }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [avatar, setAvatar] = React.useState('')

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  /**
   * Hendler for avatar input
   * */
  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  /**
   * Hendler for EditAvatarPopup form submit
   * */
  function handleEditAvatarSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      name={'edit-avatar'}
      title={'Обновить аватар'}
      buttonText={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleEditAvatarSubmit}>
      <>
        <div className="popup__field">
          <input id="avatar-input" className="popup__input popup__input_input_link" type="url"
            placeholder="Ссылка на картинку" name="avatar" onChange={handleAvatarChange}  required />
          <span className="popup__input-error avatar-input-error"></span>
        </div>
      </>
    </PopupWithForm>
  )
}
