import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';



const populateBoard = (cardData) => {
  //render a list of cards from hardcoded data
  const cards = cardData.map((cardObject) => {
    return (<Card text={cardObject.text} emoji={cardObject.emoji} />);
  });
  return cards;
};

const Board = (props) => {

  // props.url
  // props.boardName

  // React.createElement(/* */)

  
  return (
    <div className="board">
      {populateBoard(CARD_DATA.cards)}
    </div>
  )
};

Board.propTypes = {
  url:  PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
