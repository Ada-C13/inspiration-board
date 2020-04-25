import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const getEmoji = () => {
    if (props.emoji){
      return emoji.getUnicode(props.emoji);
    } else {
      return "";
    }
  }

  return (
    <div className="card">
      <ul className="card__content">
        <span className="card__content-text">
          {props.text}
        </span>
        <span className="card__content-emoji">
        {getEmoji()}
        </span>
      </ul>
    </div>
  )
}

Card.propTypes = {
text: PropTypes.string,
emoji: PropTypes.string,
};

export default Card;
