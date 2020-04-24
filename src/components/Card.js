import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

// Resource: Hannah J zoom chat
const Card = (props) => {

  const removeCard = () => {
    props.removeCardCallback(props.id);
  }


  return (
    <div className='card'>
      <section className='card__content'>
        <p className='card__content_text'>{props.text && props.text}</p>
        <span className='card__content_emoji'>
          {props.emoji && emoji.getUnicode(props.emoji)}
        </span>
        <button className='card_remove' onClick={removeCard}>Remove</button>
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
