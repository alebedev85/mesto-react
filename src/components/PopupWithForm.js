export default function PopupWithForm({isOpen, onClose, name, title, buttonText, children}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && ('popup_opened')}`} >
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