import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {

  const cards = CARD_DATA.cards.map((card) => {
    console.log(card);
    if(card['emoji'] && card['text']){
      return <li> <Card text={card.text} emoji={card.Emoji}/></li>
    }else if(card['text']){
      return <li> <Card text={card.text}/></li>
    }else{
      return <li> <Card emoji={card.emoji}/></li>
    }

    }
    
  );

  return (
    <div>
      <ul> {cards}</ul>
    </div>
  )
};
Board.propTypes = {

};

export default Board;
