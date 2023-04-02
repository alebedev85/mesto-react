function ImagePopup() {
  return (
    <div className="popup popup_type_picture">
      <div className="popup__picture-container">
        <img className="popup__picture" src="#" alt="Фото места" />
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__picture-title">Новое место</h2>
      </div>
    </div>
  )
}