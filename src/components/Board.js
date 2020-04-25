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
    console.log(`before delete ${id}`)
    axios.delete(`${url}cards/${id}`)
    .then ((response) => {
      console.log(`we are in callback function`)
      console.log(response)
      setCardList(updateData)
    })
    .catch((error) => {
      console.log(`here is our error ${error}`)
    });
  }

  const onSubmitCallback = (phrase) => {
    axios.post(`${url}boards/${boardName}/cards?text=${phrase}`) 
    .then ((response) => {
      console.log(`we are in onSubmitCallback function`)
      console.log(response)
      // setCardList(updateData)
    })
    .catch((error) => {
      console.log(`here is our error ${error}`)
    });

    // useEffect(() => {
    //   setCardList
    //   }, [onSubmitCallback]);
  
// POST https://inspiration-board.herokuapp.com/boards/:board_name/cards
// accepted params:
// text (string)
// emoji (string)

  }

  return (
    <div className="board">
      {cardList}
      <NewCardForm onSubmitCallback={onSubmitCallback}/>
    </div>
)};

Board.propTypes = {

};

export default Board;

