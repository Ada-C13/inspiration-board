import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {
  

  if (props.emoji === undefined) {
    // console.log(props.text)
  }
  
  // const onDeleteButtonClick = (event) => { 
  //   props.onDeleteButtonClickCallback(props.id)
  // }

  return (
    <div className="card__container">
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">Message: {props.text}</p>
          <p className="card__content-emoji">Emoji:{emoji.getUnicode(`${props.emoji}`)}</p>
        </div>
        <div className="card__delete">
            <button>Delete</button> {/* Revisit later to see if CSS still functional/ optimal */ }
        </div>
      </div>
    </div>
  )
}





Card.propTypes = {
  onDeleteButtonClickCallback:PropTypes.func.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;

