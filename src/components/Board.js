import React, { Component, useState } from 'react';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = () => {
  const emptyCard = () => {
    return {text: '', emoji: ''}
  }

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
    setNewCardInfo(emptyCard())
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

      <section className="board">
        {boardData}
      </section>
       
    </div>
  )
};

export default Board;
