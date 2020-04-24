import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojis from 'emoji-dictionary';

import './Card.css';

const Card = ({text, emoji}) => {
  console.log(emoji)
  return (
    <div className="card">
      
      <p className="card__content-text">{text}</p>
      {/* <p className="card__content-emoji" >{emojis.getUnicode({emoji})}</p> */}

    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
