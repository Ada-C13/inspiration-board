import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = () => {
  const cards = CARD_DATA["cards"]
  console.log(cards)
  const boardComponent = cards.map((card, i) => {
    return (
      <Card 
        key={i}
        text={card["text"]}
        emoji={card["Emoji"]}
      />
    )
  });
//   cards: Array(5)
// 0:
// text: “Make sure you pet a dog this week!”
// __proto__: Object
// 1:
// text: “”
// Emoji: “heart_eyes”
// __proto__: Object

 
  return (
    <div className='board'>
      {boardComponent}
    </div>
  )
};



Board.propTypes = {

};

export default Board;
