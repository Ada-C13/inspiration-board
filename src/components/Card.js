import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

// Resource: Hannah J zoom chat
const Card = (props) => {

  const removeCard = () => {
    props.removeCardCallback(props.id);
  };

  return (
    <div className='card'>
      <section className='card__content'>
        <p className='card__content-text'>{props.text}</p>
        <span className='card__content-emoji'>
          {props.emoji && emoji.getUnicode(props.emoji)}
        </span>
        <button 
          className='card__delete' 
          onClick={removeCard}> 
          Take this card if you want/need it...
        </button>
      </section>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  removeCardCallback: PropTypes.func.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
