import '../index.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="formEditProfile" noValidate>
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

      <div className="popup popup_type_add">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="formAddCard" noValidate>
            <fieldset className="popup__fieldset">
              <div className="popup__field">
                <input input id="place-input" className="popup__input popup__input_input_place" type="text"
                  placeholder="Название" name="cardNameImput" minLength="2" maxLength="30" required />
                <span className="popup__input-error place-input-error"></span>
              </div>
              <div className="popup__field">
                <input input id="link-input" className="popup__input popup__input_input_link" type="url"
                  placeholder="Ссылка на картинку" name="cardLinkImput" required />
                <span className="popup__input-error link-input-error"></span>
              </div>
              <button className="popup__save-button" type="submit" name="saveButton">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container popup__container_type_delete">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_type_delete" name="formDeleteCard" noValidate>
            <fieldset className="popup__fieldset">
              <button className="popup__save-button" type="submit" name="saveButton">Да</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__container popup__container_type_edit-avatar">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="formEditAvatar" noValidate>
            <fieldset className="popup__fieldset">
              <div className="popup__field">
                <input input id="avatar-input" className="popup__input popup__input_input_link" type="url"
                  placeholder="Ссылка на картинку" name="avatar" required />
                <span className="popup__input-error avatar-input-error"></span>
              </div>
              <button className="popup__save-button" type="submit" name="saveButton">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_picture">
        <div className="popup__picture-container">
          <img className="popup__picture" src="#" alt="Фото места" />
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__picture-title">Новое место</h2>
        </div>
      </div>

      <template className="element-temlate">
        <article className="element">
          <img className="element__image" src="#" alt="" />
          <h2 className="element__title"></h2>
          <div className="element__reaction-container">
            <button type="button" name="reactionButton" className="element__reaction-button"></button>
            <p className="element__like-counter"></p>
          </div>
          <button type="button" name="buttonTrash" className="element__trash-button"></button>
        </article>
      </template>

    </div>
  );
}

export default App;
