import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {

  const BASE_URL = "https://inspiration-board.herokuapp.com/"
  const BASE_BOARD = "jessica-liang"
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newCardList = [];

  useEffect(() => {
    axios.get(BASE_URL + "boards/" + BASE_BOARD + "/cards")
    .then( (response) => {
      for (let card of response.data) {
        newCardList.push(
        <li key={card.card.id}>
          <Card
            key={card.card.id}
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            deleteCardCallBack ={ deleteCard } 
          />
        </li>
        );
      };
      setCardList(newCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, [newCardList]);

  // Delete a card from board.
  const deleteCard = (props) => {
    axios.delete(BASE_URL + "cards/" + props)
      .then((response) => {
        setErrorMessage(`Card ${ props } deleted`);
      })
      .catch((error) => {
        setErrorMessage(`Unable to delete card ${ props }`);
      });
  };

  // Add a card to board.
  const addCard = (props) => {
    axios.post(BASE_URL + "boards/" + BASE_BOARD + "/cards", props)
      .then((response) => {
        setErrorMessage(`Card ${ props } added`);
      })
      .catch((response) => {
        setErrorMessage(`Unable to add card ${ props }`);
      });
  };

  return (
    <div className="board">
      <NewCardForm addCardCallBack={ addCard } />

      <ul className="validation-errors-display validation-errors-display__list">
        { cardList }
      </ul>
    </div>
  );
};

export default Board;
