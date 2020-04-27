import React, { useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const emoji = require("emoji-dictionary");

const Board = (props) => {
  const API_CARD_URL = `${props.url}${props.bordName}/cards`
  const [cards, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  //load cards
  //Source: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/apis-get.md
  useEffect( () => {
    axios.get(API_CARD_URL)
      .then((response) => {
        const apiData = [...cards, ...response.data]; //a combined array of all cards (objects)
        setCardList(apiData); //updating the cards list with the response from the API 
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }, []);

  // turn each card object into a card component
  const cardComponents = cards.map((cardObj) => {
    return(< Card 
      id={cardObj.card.id}
      text={cardObj.card.text} 
      emoji={cardObj.card.emoji === null ? "" : emoji.getUnicode(cardObj.card.emoji)}
      removeCardCallback={removeCard}
      key={cardObj.card.id}
    />)
  })

// Source: https://github.com/AdaGold/inspiration-board-api
const removeCard = (id) => {
  axios
    .delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      const updatedCards = cards.filter(
        (card) => card.id !== response.data.card.id 
      );
      setCardList(updatedCards); 
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
};

return (
  <div className="board">   
    {errorMessage ? <div><h2>{errorMessage}</h2></div> : ''}
    {cardComponents}
    
  </div>
)

}

export default Board;

// Before Refactoring:
  // useEffect(() => {
  //   axios.get(API_CARD_URL)
  //     .then((response) => {
  //       const apiData = response.data; //an array of all cards (objects)
  //       const cardAPI = apiData.map((card) => {
  //         return {
  //           id: card.card.id,
  //           text: card.card.text,
  //           emoji: card.card.emoji,
  //         };
  //       });
  //       setCardList(cardAPI); //updating the cards list with the response from the API 
  //     })
  //     .catch((error) => {
  //       errorMessage(error.message);
  //     });
  // }, []);