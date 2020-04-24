import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const presentEmoji = emoji.getUnicode(
    emoji.getName(props.data.emoji) || 
    props.data.emoji)

  return (
    <div className="card">
      <section className="card__content">
        <h1 className="card__content-text">{props.data.text}</h1>
        <p className="card__content-emoji">{presentEmoji || ""}</p>
        <input 
          id={props.data.id}
          type="submit" 
          value="Delete"
          onClick={props.deleteCard}
          className="card__delete" />
      </section>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
