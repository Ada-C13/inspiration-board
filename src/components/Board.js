import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
// import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  //resources: https://alligator.io/react/axios-react
  const BASE_URL = `${props.url}${props.boardName}/cards`;
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //Resource: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/apis-get.md
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        const apiData = response.data;
        const cardAPI = apiData.map((wrap) => {
          return {
            id: wrap.card.id,
            text: wrap.card.text,
            emoji: wrap.card.emoji,
          };
        });
        setCards(cardAPI);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const cardComponents = cards.map((card, i) => {
    return <Card key={i} id={card.id} text={card.text} emoji={card.emoji} />;
  });

  return (
    <div>
      {errorMessage && (
        <div>
          <h4>{errorMessage}</h4>
        </div>
      )}
      {cardComponents}
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
