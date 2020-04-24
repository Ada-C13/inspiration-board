import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const emoji_test = require("emoji-dictionary");

// TODO - figure out more dynamic way to call upper and lower case emoji

const Card = (props) => {
  // console.log(emoji_test.getUnicode(props.data.emoji) || emoji_test.getName(props.data.emoji))
  const presentEmoji = emoji_test.getUnicode(
    emoji_test.getName(props.data.emoji) || 
    props.data.emoji)

  return (
    <div className="card">
      <h1>{props.data.text}</h1>
      {presentEmoji || ""}
      <input 
        id={props.data.id}
        type="submit" 
        value="Delete"
        onClick={props.deleteCard}
        className="PlayerSubmissionForm__submit-btn" />
    </div>
  )
}

Card.propTypes = {

};

export default Card;
