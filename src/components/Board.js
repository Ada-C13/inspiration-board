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
      return <li> <Card text={card.text} emoji={card.emoji}/> </li>
    }else if(card['text']) {
      return <li> <Card text={card.text}/> </li>
    }else{
      return <li> <Card emoji={card.emoji}/> </li>
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