import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function DeleteCardPopup({ isOpen, onClose, hedlerDeleteCartd }) {

  /**
   * Hendler for EditAvatarPopup form submit
   * */
  function handleDeleteCard(e) {
    e.preventDefault();
    hedlerDeleteCartd();
    onClose();
  }

  return (
    <PopupWithForm
      name={'delete-card'}
      title={'Вы уверены?'}
      buttonText={'Да'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDeleteCard} />
  )
}
