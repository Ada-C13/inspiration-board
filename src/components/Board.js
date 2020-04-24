import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = () => {
  const axios = require('axios').default;
  const [boardData, setBoardData] = useState([])

  const getBoardData = () => {
    axios({
      method: 'get',
      url: 'https://inspiration-board.herokuapp.com/boards/Jocelyn-Haben/cards'})
      .then(function (response) {
        setBoardData(response.data)
      }) 
  }

  getBoardData()

  const cardsFromBoard = boardData.map((card_data, i) =>
    <Card key={i} data={card_data.card}/>
  )

  // const cardsFromFile = CARD_DATA.cards.map((card_data, i) =>
  //   <Card key={i} data={card_data.card}/>
  // )
  
  return (
    <div>
      {cardsFromBoard}
    </div>
  )
};

Board.propTypes = {

};

export default Board;
