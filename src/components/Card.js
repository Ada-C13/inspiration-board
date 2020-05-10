import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import randomColor from 'randomcolor';
import './Card.css';

const Card = (props) => {

  const removeCardBtn = () => {
    props.deleteCardCallback(props.id);
  }

  return (
    <div style={{background: `${randomColor()}`}} className="card">
      <section className="card__content">
        <p className="card__content-text">{props.text && props.text}</p>
        <span className="card__content-emoji">{props.emoji && emoji.getUnicode(props.emoji)}</span>
      </section>
    
      <button className="card__delete" onClick={removeCardBtn}>Delete</button>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func.isRequired,  
};

export default Card;
