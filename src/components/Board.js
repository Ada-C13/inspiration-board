import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {

  let state = {
    cards: cards,
    cards: []
  };


  const API_URL = "https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards"
  axios.get(API_URL)  
  .then ((response) => {
    
    cards:response.data

    }
  
  return (
    <div>
      < Card text="dummy text" />
    </div>
  )
};




Board.propTypes = {



};

export default Board;
