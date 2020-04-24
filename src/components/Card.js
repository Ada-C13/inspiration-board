import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojiDictionary from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <section className="card__content-text">
          {props.text}
        </section>
        <section className="card__content-emoji">
          {emojiDictionary.getUnicode(`${props.emoji}`)}
        </section>
      </div>
      <button 
        className="card__delete"
        onClick={() => props.deleteCardCallBack(props.id)}>
          CLICK ME TO DELETE
      </button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
