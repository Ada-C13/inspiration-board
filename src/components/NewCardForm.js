import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({ newCardInfo,
                       onChangeHandler,
                       createCard
                       }) => {
                         
  return (
    <div className="new-card-form">
      <h1 className="new-card-form__header">Pass it Forward - Post an Inspirational Message</h1>
      <form className="new-card-form__form">
          <label htmlFor="text" className="new-card-form__form-label">Input Text Here:</label>
            <input 
              name="text"
              type="text"
              placeholder="Enter Message"
              value={newCardInfo.text}
              onChange={onChangeHandler}
              className="new-card-form__form-textarea"/>

          <label htmlFor="emoji" className="new-card-form__form-label">Input Emoji Here:</label>
            <input 
              name="emoji"
              type="text"
              placeholder="Enter Emoji"
              value={newCardInfo.emoji}
              onChange={onChangeHandler}
              className="new-card-form__form-textarea"/>

          <input 
            type="button" 
            value="Add New Card"
            onClick={createCard}
            className="new-card-form__form-button" />
      </form>
    </div>
  );
} 

NewCardForm.propTypes = {

}

export default NewCardForm
