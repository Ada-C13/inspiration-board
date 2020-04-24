import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  console.log(props)
  return (
    <div className="card card__content">
      <p className="card__content-text">{props.text}</p>
      <p className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</p>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
