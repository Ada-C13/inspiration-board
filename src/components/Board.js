import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const cardSamples = (cards) => {
  console.log(cards)
  const mappedCards = cards.cards.map((card) => {
    console.log(card)
    return <Card text={card.text} emoji={card.emoji} />
  })
  return mappedCards
}

const Board = ({url, boardName}) => {
  // const cardList = "";
  
  let apiData = axios.get(`${url}/${boardName}/cards`)
    .then ((response) => {
      console.log(response.data)
      return cardSamples(response.data.card);
    })
    .catch((error) => {
      // Still need to handle errors
    });

  // const cardList = cardSamples(CARD_DATA);
  
  return (
    <div className="board">
      {apiData}
    </div>
)};

Board.propTypes = {

};

export default Board;


// const studentDataString = localStorage.getItem('studenList')
  // const studentData = JSON.parse(studentDataString)