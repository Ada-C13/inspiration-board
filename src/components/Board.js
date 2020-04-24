// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = ({url, boardName}) => {
  const [cardList, setCardList] = useState([])
  
  useEffect(() => {
  axios.get(`${url}${boardName}/cards`)
    .then ((response) => {
      const apiData = response.data
      const mappedCards = apiData.map((card) => {
        return <Card text={card.card.text} emoji={card.card.emoji} />
      })   
      setCardList(mappedCards);
    })
    .catch((error) => {
      
    });
  }, []);

  
  return (
    <div className="board">
      {cardList}
    </div>
)};

Board.propTypes = {

};

export default Board;

