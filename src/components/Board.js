import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const cards = CARD_DATA.cards.map((card) => {
    console.log(card);

    if(card['emoji'] && card['text']) {
      return <p> <Card text={card.text} emoji={card.emoji}/> </p>
    }else if(card['text']) {
      return <p> <Card text={card.text}/> </p>
    }else{
      return <p> <Card emoji={card.emoji}/> </p>
    }
  });

  return(
  <div>Board
    {cards}
  </div>
  );
  
};
Board.propTypes = {};

export default Board;
 // const API_URL_BASE = props.url

  // const [cardList, setCards] = useState([])

  // useEffect(() => {
  //   return `${API_URL_BASE}${props.boardName}`
  // }, []);