import "./App.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import ImagePopup from "../imagePopup/ImagePopup";
import { useState } from "react";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
	};

	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	};

	const handleCardClick = (card) => {
		setSelectedCard({
			isOpened: true,
			name: card.name,
			link: card.link,
		});
	};

	const closeAllPopups = () => {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setSelectedCard(null);
	};

	return (
		<>
			<div className="page">
				<Header />

				<Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />

				<Footer />

				<PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
					<input
						id="inputAbout"
						className="popup__form-input popup__form-input_name"
						required
						placeholder="Имя"
						spellCheck="true"
						type="text"
						name="name"
						minLength="2"
						maxLength="40"
					/>
					<span className="inputName-error popup__input-error"></span>
					<input
						id="inputAbout"
						className="popup__form-input popup__form-input_about"
						required
						placeholder="О себе"
						spellCheck="true"
						type="text"
						name="about"
						minLength="2"
						maxLength="200"
					/>
					<span className="inputAbout-error popup__input-error"></span>
				</PopupWithForm>

				<PopupWithForm
					name="add-card"
					title="Новое место"
					buttonText="Создать"
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				>
					<input
						id="inputTitle"
						className="popup__form-input popup__form-input_title"
						required
						placeholder="Название"
						spellCheck="true"
						type="text"
						name="inputTitle"
						minLength="2"
						maxLength="30"
					/>
					<span className="inputTitle-error popup__input-error"></span>
					<input
						id="inputUrl"
						className="popup__form-input popup__form-input_link"
						required
						placeholder="Ссылка на картинку"
						spellCheck="true"
						type="url"
						name="cardLink"
					/>
					<span className="inputUrl-error popup__input-error"></span>
				</PopupWithForm>

				<PopupWithForm
					name="avatar-edit"
					title="Обновить аватар"
					buttonText="Сохранить"
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
				>
					<input
						id="avatarUrl-input"
						className="popup__form-input popup__form-input_avatar-url"
						required
						placeholder="Ссылка на картинку"
						spellCheck="true"
						type="url"
						name="avatarUrl"
					/>
					<span className="avatarUrl-input-error popup__input-error"></span>
				</PopupWithForm>

				<PopupWithForm
					name="delete-confirm"
					title="Вы уверены?"
					buttonText="Да"
				>

				</PopupWithForm>

				<ImagePopup card={selectedCard} onClose={closeAllPopups} />
			</div>
		</>
	)
}

export default App;
