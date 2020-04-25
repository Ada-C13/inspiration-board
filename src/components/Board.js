import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  // Resources: https://alligator.io/react/axios-react
  const BASE_URL = `${props.url}${props.boardName}/cards`;
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Resource: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/apis-get.md
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        const apiData = response.data; //an array of all cards (objects)
        const cardAPI = apiData.map((obj) => {
          return {
            id: obj.card.id,
            text: obj.card.text,
            emoji: obj.card.emoji,
          };
        });
        setCards(cardAPI); //updating the cards list with the response from the API 
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  // Resource: https://github.com/AdaGold/inspiration-board-api
  const removeCard = (id) => {
    axios
      .delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        const updatedCardDeck = cards.filter(
          (card) => card.id !== response.data.card.id //remove the card ID from the updated card deck 
        );
        setCards(updatedCardDeck); //update the cards list
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const addCard = (newCardContent) => {
    const nextId = Math.max(...cards.map((card) => card.id)) + 1; //generate a new unique ID
    axios
      .post(BASE_URL, newCardContent)
      .then((response) => {
        const newCards = [...cards];

        const newCard = {
          ...newCardContent,
          id: nextId,
        };
        newCards.push(newCard); //generate and add a new card object with the contents passed in and the new unique ID

        setCards(newCards); //update the cards list with the new card included
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  //passing the child component Card, card ID, text, emoji, and the removeCard call back function
  const cardComponents = cards.map((card, i) => {
    return (
      <Card
        key={i} //each card needs to be unique so much include key with a unique value... card.id could also subsitute for this value 
        id={card.id}
        text={card.text}
        emoji={card.emoji}
        removeCardCallback={removeCard}
      />
    );
  });

  //cliked --> NEWCARDCOMPONET
  //newCardComponent --> text: ....... hit submit
  //event handler in NewCardComponent that's info back to board

  return (
    <div className='validation-errors-display'>
      {errorMessage && (
        <div className='validation-errors-display__list'>
          <h2>{errorMessage}</h2>
        </div>
      )}
      <div className='board'>{cardComponents}</div>

      <NewCardForm addCardCallback={addCard} />
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
