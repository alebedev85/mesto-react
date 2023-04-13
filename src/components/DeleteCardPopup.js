import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function DeleteCardPopup({ isOpen, onClose, hndlerDeleteCart }) {

  /**
   * Hendler for EditAvatarPopup form submit
   * */
  function handleDeleteCard(e) {
    e.preventDefault();
    hndlerDeleteCart();
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
