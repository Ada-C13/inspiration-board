import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const presentEmoji = emoji.getUnicode(
    emoji.getName(props.data.emoji) || 
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
