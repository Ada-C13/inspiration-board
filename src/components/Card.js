import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const emoji_test = require("emoji-dictionary");

// TODO - figure out more dynamic way to call upper and lower case emoji

const Card = (props) => {

  return (
    <div className="card">
      {props.data.text}
      {emoji_test.getUnicode(props.data.emoji || props.data.Emoji || "")}
    </div>
  )
}

Card.propTypes = {

};

export default Card;
