import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <p>{props.text}</p>
      <p>{emoji.getUnicode(`${props.emoji}`)}</p>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
