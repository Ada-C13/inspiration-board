import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const cards = [
      {id: 1, text: "you are cool", emoji: "flower"},
      {id: 2, text: "you are doing enough" , emoji: "smile" },
      {id: 3, text: "atleast it's not rainning", emoji: "coffee"},
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
