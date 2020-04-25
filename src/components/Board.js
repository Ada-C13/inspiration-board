import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  // console.log(props.cards)

  const boardComponents = () => { 
    const cardsList = props.cards.map((card, index) => {
    return(
      <Card
        // content={card.content}
        key={index}
        id={card.card.id}
        text= {card.card.text}
        emoji= {card.card.emoji}
        />
      );
    }); 
    return cardsList
  }

  return (
    <div className="board">
      Board
      {boardComponents()}
      <p className="validation-errors-display"></p>
      <p className="validation-errors-display__list"></p>
    </div>
  )
};

Board.propTypes = {
};

export default Board;
