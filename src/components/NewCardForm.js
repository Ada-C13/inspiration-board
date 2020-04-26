import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const newCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: '',
    emoji: '',
  });

  const onMessageChange (event) => {
    console.log(`Message field updated ${}`)
  }
  
  return(
    <form className="new-card-form">
      <h3 className="new-card-form__header">*~Create New Card~*</h3>
      <div>
          <label className="new-card-form__form-label">Message:</label>
          <input
            className="new-card-form__form-textarea"
            name="message"
            type="text"
            onChange={onMessageChange}
          />
      </div>
      <div>
        <label className="new-card-form__form-label">Emoji:</label>
        <input
          className="new-card-form__form-textarea"
          name="emoji"
          type="text"

        />
      </div>
      <input 
        className="new-card-form__form-button" 
        type="submit"
        value="Add Card"
        onChange={onEmojiChange}
      />
    </form>
  );
}


export default newCardForm;