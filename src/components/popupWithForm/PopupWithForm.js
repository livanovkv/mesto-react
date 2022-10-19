import React from "react";
import "./PopupWithForm.css";

function PopupWithForm({ name, isOpen, onClose, title, buttonText, children }) {
	return (
		<div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
			<div className="popup__form-conteiner">
				<button
					className="popup__button-close"
					type="button"
					aria-label="Закрыть"
					onClick={onClose}
				></button>
				<h3 className="popup__form-title">{title}</h3>
				<form
					className={`popup__form popup__form_${name} ${isOpen && "popup_opened"
						}`}
				>
					{children}
					<button
						className="popup__form-button-save"
						type="submit"
					>
						{buttonText}
					</button>
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;
