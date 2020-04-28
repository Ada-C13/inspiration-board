import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
    
  });

  const onTextChange = (event) => {
    console.log(`Text field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      text: event.target.value,
    });
  };

  const onEmojiChange = (event) => {
    console.log(`Emoji field updated ${event.target.value}`);
    setFormFields({
      ...formFields,
      emoji: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback(formFields);
    
    setFormFields({
      text: '',
      emoji: '',
    });
  };
  
  return(
    <div className="new-card-form">
      <form className="new-card-form__form" onSubmit={onFormSubmit}>
        <h2 className="new-card-form__header">*~Create New Card~*</h2>
        <div>
            <label className="new-card-form__form-label">Message:</label>
            <input
              className="new-card-form__form-textarea"
              name="text"
              type="text"
              value={formFields.text}
              onChange={onTextChange}
            />
        </div>
        <div>
          <label className="new-card-form__form-label">Emoji:</label>
          <input
            className="new-card-form__form-textarea"
            name="emoji"
            type="text"
            value={formFields.emoji}
            onChange={onEmojiChange}
          />
        </div>
        <input 
          className="new-card-form__form-button" 
          type="submit"
          value="Add Card"
          onClick={onFormSubmit}
        />
      </form>
    </div>
  );
}


export default NewCardForm;