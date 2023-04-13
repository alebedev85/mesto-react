import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import ImagePopup from './ImagePopup';

import { api } from '../utils/Api';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import { CardsContext } from './contexts/CardsContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({}); //State for current user info
  const [cards, setCards] = React.useState([]); //State for cards

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false); //State for EditProfilePopup
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false); //State for AddPlacePopupOpen
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false); //State for EditAvatarPopupOpen
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false); //State for DeleteCardPopupOpen
  const [selectedCard, setSelectedCard] = React.useState({}); //State for selected card for ImagePopup


  React.useEffect(() => {
    //Get user info
    api.getCurrentUser()
      .then((res) => {
        setCurrentUser(res); //Set currentUser
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
  * Handler for delete popup.
  * Changing state isDeleteCardPopupOpen.
  */
  function handleDeleteClick() {
    setDeleteCardPopupOpen(true);
  }

  /**
  * Close all popups
  */
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({});
  }

  /**
   * Handle Card Like
   * @param {object} card - object with card descripion.
   * @returns json of card with new likes
   */
  function handleCardLike(card) {
    //is it my like?
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then(newCard => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => {
        console.log(err);
      });;
  }

  /**
   * Handler delete card
   * @param {object} card - object with card descripion.
   * @returns json with list of cards without deleted card
   */
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch(err => {
        console.log(err);
      });;
  }

  /**
   * Handler to update user
   * @param {string} name - new name.
   * @param {string} description - new description.
   */
  function handleUpdateUser(name, description) {
    api.setUserInfo(name, description)
      .then(updateUser => setCurrentUser(updateUser))
      .catch(err => {
        console.log(err);
      });
    closeAllPopups();
  }

  /**
   * Handler to update avatar
   * @param {string} avatar - new avatar.
   */
  function handleUpdateAvatar(avatar) {
    api.setNewAvatar(avatar)
      .then(updateAvatar => setCurrentUser(updateAvatar))
      .catch(err => {
        console.log(err);
      });
    closeAllPopups();
  }

  /**
   * Handler to add new place
   * * @param {json} card - new card data.
   */
  function handleAddNewPlace(card) {
    api.addNewCard(card)
      .then(newCard => setCards([newCard, ...cards]))
      .catch(err => {
        console.log(err);
      });
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="page">

          <Header />

          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onClose={closeAllPopups}
            onCardClick={handleCardClick}
            onDeleteClick={handleDeleteClick}
            onCardLike={handleCardLike} />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddNewPlace={handleAddNewPlace} />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />

          <DeleteCardPopup
            isOpen={isDeleteCardPopupOpen}
            onClose={closeAllPopups}
            hndlerDeleteCartd={handleCardDelete}/>

          <ImagePopup
            name={'picture'}
            card={selectedCard}
            onClose={closeAllPopups} />
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
