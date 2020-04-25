import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {
  
  const onDeleteButtonClick = () => { 
    props.onDeleteCallback(props.id)
  }

  return (
    <div className="card__container">
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{props.text}</p>
          <p className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</p>
        </div>
        <div className="card__delete">
            <button onClick={onDeleteButtonClick}>Delete</button> {/* Revisit later to see if CSS still functional/ optimal */ }
        </div>
      </div>
    </div>
  )
}


Card.propTypes = {
  onDeleteCallback:PropTypes.func.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;

