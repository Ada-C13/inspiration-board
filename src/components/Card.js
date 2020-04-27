import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

const validateEmoji = (emojiText)=> {
  return emojiText ? emoji.getUnicode(emojiText) : "" ;
}

const Card = (props) => {

  const deleteCard = (event) => {
    event.preventDefault();
    props.deleteCallBack(props.id);
  };

  console.log(props);
  return (
    <div id={props.id} className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text} </p>
        <p className="card__content-emoji">{validateEmoji(props.emoji)} </p>
        <button className="card__delete" onClick={deleteCard}>
          Delete
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCallBack: PropTypes.func.isRequired,
};

export default Card;
