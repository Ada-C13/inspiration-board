import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojis from 'emoji-dictionary';

import './Card.css';

const Card = ({text, emoji, onClickCallback, id}) => {

  return (
    <div className="card card__content">
      
      <p className="card__content-text">{text}</p>
      <p className="card__content-emoji" >{emojis.getUnicode(`${emoji}`)}</p>
      <div >
        <input type="button" onClick={() => onClickCallback(id)} value="Delete Card" className="card__delete"/>
      </div>
    </div>
  )
}

Card.propTypes = {
  onClickCallback: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
