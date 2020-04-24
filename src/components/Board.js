import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {

  const cardList = CARD_DATA.cards.map((card, i)=> {
    console.log(i);
    console.log(card);
    return(
      <Card
        key={i}
        // ? Why we cannot use key as a prop inside of card?
        id={i}
        text={card.text}
        emoji={card.emoji}
      />
    );
  })

  return (
    <div>
      Board
      {cardList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
