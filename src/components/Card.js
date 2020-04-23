import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div>
        {props.text}
        {props.emoji}
      </div>
      <button 
        onClick={() => props.deleteCardCallBack(props.id)}
      >
          CLICK ME TO DELETE
      </button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
