import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  const onButtonClick = (event) => {
    props.onClickCallback(props.id);
  }

  // props.onClickCallback(props.id);

  return (
    <div className="card">
      <section className='card__content'>
        <p className="card__content-text">{props.text}</p>
        <p className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</p>
      </section>
      <button className="card__delete" onClick={onButtonClick}>Delete</button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
