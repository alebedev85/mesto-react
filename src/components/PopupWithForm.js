export default function PopupWithForm({isOpen, onClose, name, title, buttonText, children}) {

  function handleEscClose(evt) {
    console.log('ghghgf')
    if (evt.key === 'Escape') {
      onClose();
    };
  }

  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      onClose();
    };
  }
  return (
    <div className={`popup popup_type_${name} ${isOpen && ('popup_opened')}`} onClick = {handleOverlayClose} onKeyDown={handleEscClose} tabIndex={0}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <h2 className="popup__title">{`${title}`}</h2>
        <form className="popup__form" name="formEditProfile" >
          <fieldset className="popup__fieldset">
            {children}
            <button className="popup__save-button" type="submit" name="saveButton">{buttonText}</button>
          </fieldset>
        </form>
      </div>
    </div >
  )
}
