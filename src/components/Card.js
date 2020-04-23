import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

const Card = (props) => {
 // text
 // optional emoji 
  const emojiChar = require("emoji-dictionary");
  const text = props.text;
  const emoji = props.emoji 




  return (
    <div className="card">
      <p>{emoji}</p>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
