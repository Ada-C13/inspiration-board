import React, { useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';
// props: URL or boardname

const Board = (props) => {
  const API_CARD_URL = `${props.url}${props.bordName}/cards`
  const [cards, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  //load cards
  //Source: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/apis-get.md
  useEffect(() => {
    axios.get(API_CARD_URL)
      .then((response) => {
        const apiData = response.data; //an array of all cards (objects)
        const cardAPI = apiData.map((card) => {
          return {
            id: card.card.id,
            text: card.card.text,
            emoji: card.card.emoji,
          };
        });
        setCardList(cardAPI); //updating the cards list with the response from the API 
      })
      .catch((error) => {
        errorMessage(error.message);
      });
  }, []);
  

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

  // let state = {
  //   cards: cards,
  //   cards: []
  // };

  // const API_URL = "https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards"
  // axios.get(API_URL)  
  // .then ((response) => {
    
  //   cards:response.data
    
  //   },

  


// Board.propTypes = {



// };
}

export default Board;
