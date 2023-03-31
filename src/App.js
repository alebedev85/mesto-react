import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <a href="#"><img src="<%=require('./images/Logo.svg')%>" className="header__logo" alt="Логотип Место" /></a>
      </header>
      <main className="content">
        <section className="profile" aria-label="Профаил">
          <div className="profile__card">
            <button className="profile__edit-avatar-button" type="button" name="editNewAvater">
              <img src="#" className="profile__avatar" alt="Фото профайла" />
                <div className="profile__avatar-blackout"></div>
            </button>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <p className="profile__job"></p>
              <button className="profile__edit-button" type="button" name="editProfile">
              </button>
            </div>
          </div>
          <button className="profile__add-button" type="button" name="editCard"></button>
        </section>
        <section className="elements" aria-label="Картачки c фотографиями">
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="formEditProfile" novalidate>
            <fieldset className="popup__fieldset">
              <div className="popup__field">
                <input id="name-input" className="popup__input popup__input_input_name" type="text" placeholder="Ваше имя"
                  name="inputName" minlength="2" maxlength="40" required />
                  <span className="popup__input-error name-input-error"></span>
              </div>
              <div className="popup__field">
                <input id="job-input" className="popup__input popup__input_input_job" type="text" placeholder="Ваше занятие"
                  name="inputJob" minlength="2" maxlength="200" required />
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
          <form className="popup__form" name="formAddCard" novalidate>
            <fieldset className="popup__fieldset">
              <div className="popup__field">
                <input input id="place-input" className="popup__input popup__input_input_place" type="text"
                  placeholder="Название" name="cardNameImput" minlength="2" maxlength="30" required />
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
          <form className="popup__form popup__form_type_delete" name="formDeleteCard" novalidate>
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
          <form className="popup__form" name="formEditAvatar" novalidate>
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
