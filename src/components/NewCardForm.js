import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {
  
  const emojis = EMOJI_LIST.map((em) => {
    return(
    <option>{emoji.getUnicode(em)}</option>
    );
  })

  return (
    <div className="new-card-form">
      <h1 className="new-card-form__header">
        Making a new card!
      </h1>
      <form className="new-card-form__form">
        <div>
          <label className="new-card-form__form-label">Write your sticky: </label>
          <input 
            type="text" 
            className="new-card-form__form-textarea"/>
        </div>
        <div>
          {/* <label className="new-card-form__form-label">Pick your emoji:</label> */}
          <select className="new-card-form__form-select">
            {emojis}
          </select>
        </div>
        <button className="new-card-form__form-button">Submit</button>
      </form>
    </div>
  );
};

export default NewCardForm;