import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

// emojiList = require("emoji-dictionary");

const Card = (props) => {
  const emojiCollection = require('emoji-dictionary');
  const cardInspiration = () => {
    if (props.emoji) {
      return ((<p>{emoji.getUnicode(props.emoji)}</p>));
    }else if (props.text){
      return(<p>{props.text}</p>);
    }else{
      return (<p>{props.text} {emojiCollection.getUnicode(props.emoji)}</p>);
    }
  }
  
  return (
    <div className="card">
      {cardInspiration()}
    </div>
  )
}

Card.propTypes = {

};

export default Card;
