import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <ul className="card__content">
        <span className="card__content-text">
          {props.text}
        </span>
        <span className="card__content-emoji">
        {props.emoji}
        </span>
      </ul>
      Card
    </div>
  )
}

Card.propTypes = {
id: PropTypes.number.isRequired,
text: PropTypes.string.isRequired,
emoji: PropTypes.string,
};

export default Card;
