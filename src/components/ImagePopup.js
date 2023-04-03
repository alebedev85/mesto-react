export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.name} ${Object.keys(props.card).length && ('popup_opened')}`} >
      <div className="popup__picture-container">
        <img className="popup__picture" src={props.card.link} alt={`Фото ${props.card.name}`} />
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__picture-title">{props.card.name}</h2>
      </div>
    </div>
  )
}
