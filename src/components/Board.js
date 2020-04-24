import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = () => {
  console.log(CARD_DATA)

  const cardList = CARD_DATA.cards.map( (card, i) => {
    console.log(i)
    return (
      <li key={i}>
        <Card 
        text={card.text}
        emoji={card.emoji}
        id={i}
      />
      </li> 
    )
  })

  return (
    <div>
      {cardList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
