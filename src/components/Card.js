import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

const Card = (props) => {
 // text
 // optional emoji 
  const emojiDictionary = require("emoji-dictionary");
  

  const cardContents = () => {
    
      if(props.emoji && props.text){
        return (<p  className='card__content card__content-text card__content-emoji'>
          {props.text} {emojiDictionary.getUnicode(props.emoji)}
          </p>);
      }else if(props.text){
        return (<p className='card__content card__content-text'>{props.text} </p>);
      }else{
        return ((<p  className='card__content card__content-emoji'>{emoji.getUnicode(props.emoji)}</p>))
      }
     
  }

  const deleteCardCallback = () => {
    

    props.deleteCard(props.id);
    console.log('deleted card? ')



  }


  return (
    <div className="card" id={props.id}>
      {cardContents()}
      <button onClick={props.deleteCard} className='card__delete'> Delete </button>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
