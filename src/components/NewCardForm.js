import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = (props) => {
	const [ cardForm, setCardForm ] = useState({
		text  : '',
		emoji : '',
	});

	const onInputChange = (event) => {
		const newForm = { ...cardForm };
		newForm[event.target.name] = event.target.value;
		setCardForm(newForm);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		props.addCardCallBack(cardForm);
		setCardForm({
			text  : '',
			emoji : '',
		});
	};

	return (
		<div className="new-card-form">
			<header className="new-card-form__header">
				<h3 className='header__text' >Make a new Card!</h3>
			</header>
			<form className="new-card-form__form" onSubmit={onFormSubmit}>
				<label htmlFor="text" className="new-card-form__form-label">
					Text
				</label>
				<input
					id="text"
					name="text"
					onChange={onInputChange}
					value={cardForm.text}
					className="new-card-form__form-textarea"
				/>
				<label htmlFor="emoji" className="new-card-form__form-label">
					Emoji
				</label>
				<input
					id="emoji"
					name="emoji"
					onChange={onInputChange}
					value={cardForm.emoji}
					className="new-card-form__form-textarea"
				/>
				<button className="new-card-form__form-button">Post New Card</button>
			</form>
		</div>
	);
};

NewCardForm.propTypes = {
	addCardCallBack : PropTypes.func.isRequired,
};

export default NewCardForm;
