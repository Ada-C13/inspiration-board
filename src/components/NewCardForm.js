import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = ({ newCardInfo,
                       onChangeHandler,
                       createCard
                       }) => {

  // console.log(newCardInfo)
                         
  return (
    <div>
      Input Text Here:
      <input 
        name="text"
        type="text"
        placeholder="Type in inspirational message here"
        value={newCardInfo.text}
        onChange={onChangeHandler}/>

      Input Emoji Here:
      <input 
        name="emoji"
        type="text"
        placeholder="Enter emoji"
        value={newCardInfo.emoji}
        onChange={onChangeHandler}/>

      <input 
        type="button" 
        value="Add New Card"
        onClick={createCard} />
      
    </div>
  );
} 

NewCardForm.propTypes = {

}

export default NewCardForm
