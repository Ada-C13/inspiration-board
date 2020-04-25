// import React, { Component } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
    
  const [phrase, setPhrase] = useState('')

  const onInputChange = (event) => {
  
  let newPhrase = event.target.value;
  setPhrase(newPhrase);
  };

  const onFormSubmitCallback = (event) => {
    event.preventDefault()  
    props.onSubmitCallback(phrase)
  }

  return(

    <form className="new-card-form"
        onSubmit={onFormSubmitCallback}>

      <div className="new-card-form__form">
        <h2 className="new-card-form__header">New Card</h2>
        <label htmlFor="writePost" className="new-card-form__form-label">Write Post: </label>
        <input
          name="Submit post"
          placeholder="Say amazing things"
          value={phrase.name}
          onChange={onInputChange}
          type="text"
        />
      </div>
      <div className="new-card-form__form-button">
        <input type="submit" value="submit card" className="new-card-form__form-button"  onSubmit={onFormSubmitCallback}/>
      </div>
    </form>
  );
};

NewCardForm.propTypes = {
    onSubmitCallback: PropTypes.func.isRequired,
  };

  export default NewCardForm;