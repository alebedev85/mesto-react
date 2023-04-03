export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && ('popup_opened')}`} >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose} />
        <h2 className="popup__title">{`${props.title}`}</h2>
        <form className="popup__form" name="formEditProfile" >
          <fieldset className="popup__fieldset">
            {props.children}
            <button className="popup__save-button" type="submit" name="saveButton">{props.buttonText}</button>
          </fieldset>
        </form>
      </div>
    </div >
  )
}