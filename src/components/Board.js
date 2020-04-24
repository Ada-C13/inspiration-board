import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  // map CARD_DATA to create cards in array

  const cards = CARD_DATA.cards.map((card_data, i) =>
    <Card key={i} data={card_data}/>
  )
  

  return (
    <div>
      {cards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
