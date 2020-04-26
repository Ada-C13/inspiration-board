import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const API_URL_BASE = "https://inspiration-board.herokuapp.com/"


const Board = (props) => {
  const [cardsList, setCardsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL_BASE}boards/alicias-inspir-board/cards`)
      .then( (response) => {
        const cards = response.data.map((cardObject) => {
            return (<Card 
              text={cardObject.card.text} 
              emoji={cardObject.card.emoji} 
              id={cardObject.card.id}
              onDeleteCallback={deleteCard}
              />);
        });
        setCardsList(cards);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, [cardsList]);

  const addCard = (card) => {
    axios.post(`${API_URL_BASE}boards/alicias-inspir-board/cards?text=${card.text}&emoji=${card.emoji}`)
    .then((response) => {
      setErrorMessage(`Card ${card} added`);
    })
    
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(`Unable to add card: ${errorMessage}`);
    })
  }

  // https://inspiration-board.herokuapp.com/boards/:board_name/cards?text=This is a temporary card&emoji=grimacing

  const deleteCard = (cardId) => {
      axios.delete(`${API_URL_BASE}/cards/${cardId}`)
      .then((response) => {
        setErrorMessage(`Card ${cardId} deleted`);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(`Unable to delete card: ${errorMessage}`);
      })
  }
  
  return (
    <div className="board">
      <NewCardForm addCardCallback={addCard}/>
      {cardsList}
    </div>
  )
};

Board.propTypes = {
  url:  PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
