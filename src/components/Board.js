// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


// const cardSamples = (data) => {
//   console.log(`You have reached cardSamples`)
//   console.log(data)
//   const mappedCards = data.card.map((card) => {
//     console.log("you have reached the mapping thing")
//     return <Card text={card.text} emoji={card.emoji} />
//   })
//   console.log(`You have reached mappedCards ${mappedCards}`)
//   return mappedCards
// }

const Board = ({url, boardName}) => {
  const [cardList, setCardList] = useState([])
  
  useEffect(() => {
  axios.get(`${url}${boardName}/cards`)
    .then ((response) => {
      console.log(response.data)
      const apiData = response.data
      console.log(apiData)
      // setCardList(cardSamples(apiData))
      const mappedCards = apiData.map((card) => {
        console.log("you have reached the mapping thing")
        return <Card text={card.card.text} emoji={card.card.emoji} />
      })
      console.log(mappedCards);      
      setCardList(mappedCards);
      // return cardSamples(response.data.card);
    })
    .catch((error) => {
      // Still need to handle errors
    });
  }, []);
  // const cardList = cardSamples(CARD_DATA);
  
  return (
    <div className="board">
      {cardList}
    </div>
)};

Board.propTypes = {

};

export default Board;


// const studentDataString = localStorage.getItem('studenList')
  // const studentData = JSON.parse(studentDataString)