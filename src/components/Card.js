import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

// Resource: Hannah J zoom chat
const Card = (props) => {
  return (
    <div className='card'>
      <section className='card__content'>
        <p className='card__content_text'>{props.text && props.text}</p>
        <span className='card__content_emoji'>
          {props.emoji && emoji.getUnicode(props.emoji)}
        </span>
      </section>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
