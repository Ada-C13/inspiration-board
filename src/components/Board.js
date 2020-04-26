import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// def setCardsList(updatedCards) {
//   cardList = updatedCards;
// }

const Board = (props) => {
  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const API_URL_BASE = "https://inspiration-board.herokuapp.com/boards/alicias-inspir-board/cards"
  
  useEffect(() => {
    axios.get(API_URL_BASE)
      .then( (response) => {
        // How to handle a successful response
        const cards = response.data.map((cardObject) => {
            return (<Card 
              text={cardObject.card.text} 
              emoji={cardObject.card.emoji} 
              />);
        });
        setCardsList(cards);
      })
      .catch((error) => {
        // Still need to handle errors
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, []);

  return (
    <div className="board">
      {cardsList}
    </div>
  )
};

Board.propTypes = {
  url:  PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
