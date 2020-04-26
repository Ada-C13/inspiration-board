import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

  const [formText, setFormText] = useState("");
  const [formEmoji, setFormEmoji] = useState("");

  const onTextChange = (event) => {
    setFormText( event.target.value);
  };

  const onEmojiChange = (event) => {
    setFormEmoji( event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(formText, formEmoji);
    setFormText("");
    setFormEmoji(""); 

  };

  return (
    <div className="new-card-form">
      <h3 className="new-card-form__header">New Card </h3>
      <form className="new-card-form__form" >

        <div>
          <input
            name="text" 
            className="new-card-form__form-textarea"
            onChange={onTextChange}
            value={formText}
            placeholder="Enter Text"
            type="text" />
          <input
            name="emoji" 
            className="new-card-form__form-textarea"
            onChange={onEmojiChange}
            value={formEmoji}
            placeholder="Enter Emoji"
            type="text" />
        </div>

        <div>
          <input
            type="button"
            value="Submit Card"
            className="new-card-form__form-button"
            onClick={onSubmit} /> 
        </div>

      </form>
    </div>
  );
}

NewCardForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default NewCardForm;
