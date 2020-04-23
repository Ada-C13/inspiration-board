import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const cards = props.cardList.map(card=>{
    
    return(
    <Card id={card.card.id} text={card.card.text} emoji={card.card.emoji}/>
    );
  });

  return (
    <div>
      {cards}
    </div>
  )
};

Board.propTypes = {

};

export default Board;
