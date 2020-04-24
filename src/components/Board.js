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
      console.log(mappedCards)
      setCardList(mappedCards);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, [cardList]);

  const onClickCallback = (id) => {
    console.log(`before delete ${id}`)
    axios.delete(`${url}cards/${id}`)
    .then ((response) => {
      console.log(`we are in callback function`)
      console.log(response)
      setCardList(updateData)
      
      // setCardList(mappedCards);
    })
    .catch((error) => {
      console.log(`here is our error ${error}`)
    });
  }


  return (
    <div className="board">
      {cardList}
    </div>
)};

Board.propTypes = {

};

export default Board;

