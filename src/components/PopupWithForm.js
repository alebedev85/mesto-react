export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && ('popup_opened')}`} >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{`${props.title}`}</h2>
        {props.children}
      </div>
    </div >
  )
}