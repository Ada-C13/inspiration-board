import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const emoji = require("emoji-dictionary");
// console.log(emoji.getUnicode("heart_eyes"));
console.log(emoji.unicode);

const Board = (props) => {
  const cards = [
      {id: 1, text: "you are cool", emoji: emoji.getUnicode("hibiscus")},
      {id: 2, text: "you are doing enough" , emoji: emoji.getUnicode("ok_hand")},
      {id: 3, text: "you are perfect the way you are", emoji: emoji.getUnicode("princess")},
    ]
    const cardComponents = cards.map((card) => {
      return ( <Card id={card.id} text={card.text} emoji={card.emoji} />);
    });
  
  return (
    <div className="board">
     {cardComponents}

    </div>
  )
};
Board.propTypes = {

};

export default Board;
