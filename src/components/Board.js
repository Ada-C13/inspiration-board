import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {

  const BASE_URL = "https://inspiration-board.herokuapp.com/"
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
  }, []);

  const deleteCard = (props) => {
    console.log("This is linked to " + props);
    // console.log(BASE_URL + "cards/" + props);
    // const newCardList = cardList.filter((card) => {
    //   console.log(card);
    //   console.log(props);
    //   return card.id !== props;
    // });
    // setCardList(newCardList);

    // if (newCardList.length < cardList.length) {
      axios.delete(BASE_URL + "cards/" + props)
        .then((response) => {
          setErrorMessage(`Card ${ props } deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${ props }`);
        });
      };

  const addCard = (props) => {
    axios.post(BASE_URL + "boards/jessica-liang/cards", props)
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

Board.propTypes = {
  
};

export default Board;
