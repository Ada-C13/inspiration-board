import React, { useState ,useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {

  const cardsList = CARD_DATA.cards.map((card, i) => {
    return (
      <div key={i}>
        <Card card={card} />
      </div>
    )
  })
  return (
    <div className='Board'>
      {cardsList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
