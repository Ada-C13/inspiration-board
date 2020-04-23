import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  
  return (
    <div className="card" id={props.id}>
      {props.text}
      {props.emoji}
      {/* <button onClick={handleClick}>
        Delete
      </button> */}
    </div>
  )
}

Card.propTypes = {
  text:PropTypes.string,
  emoji:PropTypes.string
};

export default Card;
