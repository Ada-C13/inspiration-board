import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <h2 className="card__content">
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(props.emoji)}</p>
      </h2>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

Card.defaultProps = {
  emoji: ''
};

export default Card;
