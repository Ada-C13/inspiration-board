import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = () => {
  const emptyCard = () => {
    return {text: '', emoji: ''}
  }

  const axios = require('axios').default;
  const [boardData, setBoardData] = useState([])
  const [newCardInfo, setNewCardInfo] = useState(emptyCard())

  axios({
    method: 'get',
    url: 'https://inspiration-board.herokuapp.com/boards/Jocelyn-Haben/cards'})
    .then((response) => {
      setBoardData(response.data.map((card_data, i) =>
        <Card 
          key={i} 
          data={card_data.card} 
          deleteCard={deleteCard}/>));
  }) 

  const deleteCard = (event) => {
    // console.log(event.target.id)
    axios({
      method: 'delete',
      url: `https://inspiration-board.herokuapp.com/cards/${event.target.id}`})
  }

  const createCard = () => {
    axios({
      method: 'post',
      url: `https://inspiration-board.herokuapp.com/boards/Jocelyn-Haben/cards`,
      data: {
        text: newCardInfo.text,
        emoji: newCardInfo.emoji
      }
    })
  }

  const onChangeHandler = (event) => {
    setNewCardInfo({
      ...newCardInfo,
      [event.target.name]: event.target.value})
  }
  
  return (
    <div>
      <NewCardForm 
        newCardInfo={newCardInfo}
        createCard={createCard}
        onChangeHandler={onChangeHandler}/>

      {boardData}  
    </div>
  )
};

Board.propTypes = {

};

export default Board;
