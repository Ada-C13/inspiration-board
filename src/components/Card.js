import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.text}
      {props.emoji}
    </div>
  )
}

Card.propTypes = {

};

export default Card;
