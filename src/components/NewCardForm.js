import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  
  const [formFields, setFormFields] = useState({
    text: "",
    emoji: ""
  });

  const onInputChange = (event) => {
    console.log(event.target.value);
  
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
    console.log(formFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addCard(formFields);

    setFormFields({
      text: '',
      emoji: '',
    });
  };

  const emojis = EMOJI_LIST.map((em) => {
    return(
    <option name="emoji" value={em}>{emoji.getUnicode(em)}</option>
    );
  });

  return (
    <div className="new-card-form">
      <h1 className="new-card-form__header">
        Add a new card!
      </h1>
      <form className="new-card-form__form" onSubmit={onFormSubmit}>
        <div>
          <label className="new-card-form__form-label">Leave your mark!: </label>
          <input 
            type="text"
            name="text" 
            className="new-card-form__form-textarea"
            onChange={onInputChange}
            value={formFields.text}  
          />
        </div>
        <div>
          <label className="new-card-form__form-label" htmlFor="emoji"></label>
          <select 
            className="new-card-form__form-select"
            name="emoji"
            onChange={onInputChange}
          >
            {emojis}
          </select>
        </div>
        <button className="new-card-form__form-button">Submit</button>
      </form>
    </div>
  );
};

export default NewCardForm;