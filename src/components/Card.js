import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';

import './Card.css';
//props: text, emoji, and id
// div = className w/ card conteny i.e. text and emoji

const Card = (props) => {
  return (
    <div className="card">
      Card
      <p> {props.text}</p>
      {

      }

    </div>
  )
}

Card.propTypes = {
  text:PropTypes.string
};

export default Card;
