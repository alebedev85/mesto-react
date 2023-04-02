export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__title">{`${props.title}`}</h2>
        <form className="popup__form" name={`${props.name}`} noValidate>
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
      </div>
    </div>
  )
}