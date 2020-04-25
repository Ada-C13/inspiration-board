import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

const validateEmoji = (emojiText)=> {
  return emojiText ? emoji.getUnicode(emojiText) : "" ;
}

const Card = (props) => {

  console.log(props);
  return (
    <div id={props.id} className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text} </p>
        <p className="card__content-emoji">{validateEmoji(props.emoji)} </p>
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
