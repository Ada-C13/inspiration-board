import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const emoji_test = require("emoji-dictionary");

// TODO - figure out more dynamic way to call upper and lower case emoji

const Card = (props) => {
  return (
    <div className="card">
      {props.data.text}
      {emoji_test.getUnicode(props.data.emoji || props.data.Emoji || "")}
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
