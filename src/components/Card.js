import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const onDeleteClick = () => {
    props.onDeleteCard(props.id);
  }
  
  return (
    <div className="card">
      <div>
        {props.text}
        {props.emoji}
      </div>
      <button 
        onClick={() => props.onDeleteClick(props.id)}
      >
          CLICK ME TO DELETE
      </button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
