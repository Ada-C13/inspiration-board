import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newCardList = [];

  useEffect(() => {
    axios.get(props.url + "boards/" + props.boardName + "/cards")
    .then( (response) => {
      for (let card of response.data) {
        newCardList.push(
        <li key={card.card.id}>
          <Card
            key={card.card.id}
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            deleteCardCallBack={props.deleteCardCallBack}
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
  }, []);

  return (
    <div className="board">
      <NewCardForm addCardCallBack={ props.addCardCallBack } />

      <ul className="validation-errors-display validation-errors-display__list">
        { cardList }
      </ul>
    </div>
  );
};

Board.propTypes = {
  
};

export default Board;
