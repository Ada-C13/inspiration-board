import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const colors = ["yellow", "lightblue", "pink", "lightgreen", "violet"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="card" style={{backgroundColor: randomColor}}>
      <div className="card__content">
        <p className="card__content-text"> {props.text}  </p>
        <div className="card__content-emoji"> {props.emoji} </div>
        <button className="card__delete"> delete</button>
      </div>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
