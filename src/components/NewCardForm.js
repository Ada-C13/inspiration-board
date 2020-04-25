import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  
  const[formFields, setForm] = useState({
    text: '',
    emoji: '',
  });

  const onInputChange = (event) => {
    // Duplicate formFields into new object
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setForm(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (formFields.text !== '' ||
    formFields.emoji !== '') {
    // Send that data back up to App
    props.addNewCardCallback(formFields.text, emoji.getName(formFields.emoji))

    // Clear the fields
    setForm({
            text: '',
            emoji: '',
          })
        }
      };

const emojiOptions = EMOJI_LIST.map((emoji1 , i) => {
  return (
    <option key={i}>{emoji.getUnicode(`${emoji1}`)}</option>
  )
});

  return (
    <form className="new-card-form" onSubmit={onFormSubmit}>
      <section className="new-card-form__form">
        <header className="new-card-form__header">Add a new card</header>
        <div className="new-card-form__form-label">Type an inspiration text here</div>
        <input 
          className="new-card-form__form-textarea" 
          name='text' 
          value={formFields.text} 
          onChange={onInputChange}>
        </input>
        <div className="new-card-form__form-label">Add an Emoji</div>
        <select 
            className="new-card-form__form-select" 
            name='emoji' 
            value={formFields.emoji}
            onChange={onInputChange}>
          {emojiOptions}
        </select>
        <button type='submit' className="new-card-form__form-button">Submit</button>

      </section>
      
    </form>     
  )
};

NewCardForm.propTypes = {
  addNewCardCallback: PropTypes.func.isRequired,
};


export default NewCardForm;