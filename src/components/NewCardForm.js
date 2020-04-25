import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const NewCardForm = (props) => {
	const [ cardForm, setCardForm ] = useState({
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
			<form className="new-card-form__form" onSubmit={onFormSubmit}>
				<header className="new-card-form__header">
					<h3>Make a new Card!</h3>
				</header>
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
					Emoji:
				</label>
				<input
					id="emoji"
					name="emoji"
					onChange={onInputChange}
					value={cardForm.emoji}
					className="new-card-form__form-textarea"
				/>
				<button className="new-card-form__form-button">Make New Card</button>
			</form>
		</div>
	);
};

NewCardForm.propTypes = {
	addCardCallBack : PropTypes.func.isRequired,
};

export default NewCardForm;
