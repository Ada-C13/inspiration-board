import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


const NewCardForm = (props) => {

  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  })


  const onInputChange = (event) => {
    const newFormFields = {...formFields}
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
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
    <div className = "new-card-form">
      <h3 className = "new-card-form__header">Create new form</h3>
      <form className = "new-card-form__form" onSubmit={onFormSubmit}>
        <div>
          <label className = "new-card-form__form-label">Message</label>
          <input
            onChange = {onInputChange}
            className = "new-card-form__form-textarea"
            name = "text"
            type = "text"
            value={formFields.text}
          />
        </div>
        <div> 
          <label>Emoji</label>
          <select onChange={onInputChange} name = "emoji" className = "new-card-form__form-select" value={formFields.emoji}>
            <option value={EMOJI_LIST[0]}>{emoji.getUnicode(`${EMOJI_LIST[0]}`)}</option>
            <option value={EMOJI_LIST[1]}>{emoji.getUnicode(`${EMOJI_LIST[1]}`)}</option>
            <option value={EMOJI_LIST[2]}>{emoji.getUnicode(`${EMOJI_LIST[2]}`)}</option>
            <option value={EMOJI_LIST[3]}>{emoji.getUnicode(`${EMOJI_LIST[3]}`)}</option>
            <option value={EMOJI_LIST[4]}>{emoji.getUnicode(`${EMOJI_LIST[4]}`)}</option>
            <option value={EMOJI_LIST[5]}>{emoji.getUnicode(`${EMOJI_LIST[5]}`)}</option>
            <option value={EMOJI_LIST[6]}>{emoji.getUnicode(`${EMOJI_LIST[6]}`)}</option>
          </select>
        </div>
        <button className = "new-card-form__form-button">Add Card</button>
      </form>
    </div>
  )
}

export default NewCardForm;
