import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{props.emoji}</p>
      </div>
      <button className="card__delete" onClick={() => props.deleteCardCallback(props.id)}>Delete</button>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallback: PropTypes.func.isRequired
};

export default Card;
