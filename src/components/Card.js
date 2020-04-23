import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';


import './Card.css';

const Card = (props) => {
 // text
 // optional emoji 
  const emojiDictionary = require("emoji-dictionary");
  

  const cardContents = () => {
    console.log(props);
      if(props.emoji && props.text){
        return (<p>{props.text} {emojiDictionary.getUnicode(props.emoji)}</p>);
      }else if(props.text){
        return (<p>{props.text} </p>);
      }else{
        return ((<p>{emoji.getUnicode(props.emoji)}</p>))
      }
     
  }


  return (
    <div className="card">
      {cardContents()}
    </div>
  )
}

Card.propTypes = {

};

export default Card;
