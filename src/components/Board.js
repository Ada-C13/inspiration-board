import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const BASE_URL = `${props.url}${props.boardName}/cards`

  const[cards, setCards] = useState([]);
  const[errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(BASE_URL)
    .then((response) => {
      const apiData = response.data;

      const cardObjects = apiData.map((cardWrapper, i) => {
        return {
          id: cardWrapper.card.id,
          text: cardWrapper.card.text,
          emoji: cardWrapper.card.emoji
        }
      });
      setCards(cardObjects);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [props.boardName]);


  // Wave 3
  const deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      const newCards = cards.filter(card => card.id !== id);
      setCards(newCards);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  };


  // Wave 3
  const addCard = (cardInfo) => {
    const nextId = Math.max(...cards.map(card => card.id)) + 1;

    axios.post(BASE_URL, cardInfo)
    .then((response) => {
      const newCards = [...cards];
      const newCard = {
        id: nextId,
        ...cardInfo
      };
      newCards.unshift(newCard);
      setCards(newCards);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  const cardComponents = cards.map((card) => {
    return (
      <section key={card.id}>
        <Card 
          id={card.id}
          text={card.text}
          emoji={card.emoji}
          deleteCardCallback={deleteCard}
        />
      </section>
    );
  });

  return (
    <div className="validation-errors-display">

      {errorMessage &&
      <div className="validation-errors-display__list">
        <h2>{errorMessage}</h2>
      </div>}

      <div className="board">
        {cardComponents}
      </div>
      <NewCardForm 
        addCardCallback={addCard}
      />
    </div>
  )
};


Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
