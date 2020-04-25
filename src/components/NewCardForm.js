import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const NewCardForm = (props) => {
	const [ cardForm, setCardForm ] = useState({
		//initial state can be empty object
		text  : '',
		emoji : ''
	});

	const onInputChange = (event) => {
		const newForm = { ...cardForm };
		newForm[event.target.name] = event.target.value;
		setCardForm(newForm);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		console.log(cardForm);
		props.addCardCallBack(cardForm);

		setCardForm({
			text  : '',
			emoji : ''
		});
	};

	const EMOJI_LIST = [ '', 'heart_eyes', 'beer', 'clap', 'sparkling_heart', 'heart_eyes_cat', 'dog' ];

	return (
		<div className="new-card-form">
			<header className="new-card-form__header">
				<h2>Make a new Card!</h2>
			</header>
			<form className="new-card-form__form" onSubmit={onFormSubmit}>
				<label htmlFor="text" className="new-card-form__form-label">
					Type Text Here
				</label>
				<input
					id="text"
					name="text"
					onChange={onInputChange}
					value={cardForm.text}
					className="new-card-form__form-textarea"
				/>
				<label htmlFor="emoji" className="new-card-form__form-label">
					Enter Emoji Here
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
	addCardCallBack : PropTypes.func.isRequired
};

export default NewCardForm;
