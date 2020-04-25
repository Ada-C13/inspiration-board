import React, { useState } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog",
];

const NewCardForm = (props) => {
  const [text, setText] = useState('');
  const [emoji, setEmoji] =useState('')

  // function for submitting the form
  const onFormSubmit = (event) => {
    event.preventDefault();
    const message = {
      text: {text},
      emoji: {emoji}
    };

    setText('')
    setEmoji('')

    // props.onFormSubmit(text);
    props.addCardCallback(message)
  }

  return (
    <form className="new-card-form" onSubmit={onFormSubmit}>
      <h3 className="new-card-form__header">What inspires you?</h3>

      <div className="new-card-form_form">
        <label className="new-card-form__form-label" htmlFor="text">
          Text:
        </label>
        <input 
          className="new-card-form__form-textarea"  
          name="text" 
          placeholder="text"
          value={text} 
          onChange={e => setText(e.target.value)} 
        />
      </div>

      <div className="new-card-form_form">
        <label className="new_card_form_form-label" htmlFor="emoji">
          Emoji:
        </label>
        <input 
          className="new-card-form__form-textarea" 
          name="emoji"
          placeholder="emoji"
          value={emoji} 
          onChange={e => setEmoji(e.target.value)} 
        />
      </div>

      <input 
        className="new-card-form__form-button" 
        type="submit" 
        value="Add Card"
      />
    </form>
  );
}

NewCardForm.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  addCardCallback: PropTypes.func,
}

export default NewCardForm

//formSubmitCallback
//name or id of the board
