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
  const [errorMesage, setErrorMessage] = useState(null)
  
  const updateData = useEffect(() => {
  axios.get(`${url}boards/${boardName}/cards`)
    .then ((response) => {
      const apiData = response.data
      const mappedCards = apiData.map((card) => {
        return <Card text={card.card.text} emoji={card.card.emoji} onClickCallback={onClickCallback} key={card.card.id} id={card.card.id}/>
      })   
      setCardList(mappedCards);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, [cardList, onSubmitCallback]);

  const onClickCallback = (id) => {
    axios.delete(`${url}cards/${id}`)
    .then ((response) => {
      setCardList(updateData)
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    });
  }

  const onSubmitCallback = (phrase) => {
    axios.post(`${url}boards/${boardName}/cards?text=${phrase}`) 
    .then ((response) => {

    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    });
  }

  return (
    <div className="board">
      {cardList}
      <NewCardForm onSubmitCallback={onSubmitCallback}/>
    </div>
)};

Board.propTypes = {
  url: PropTypes.string.isRequired, 
  boardName: PropTypes.string.isRequired
};

export default Board;

