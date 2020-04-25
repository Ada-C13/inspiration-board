import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    axios.get(`${props.url}/${props.boardName}/cards`)
      .then((response) => {
        const apiCardsList = response.data;
        setCardsList(apiCardsList);
      })
      .catch((error) => {
        console.log(error.message);
      });

  }, []);

  const createCards = () => {

    return cardsList.map((cardWrapper, index) => {
      return (
        <Card
        key={index}
        text={cardWrapper.card.text}
        emoji={cardWrapper.card.emoji}
        />
      )
    });

  };

  return (
    <section>
      <div>
        {createCards()}
      </div>
    </section>
  )
};

Board.propTypes = {
url: PropTypes.string.isRequired,
boardName: PropTypes.string.isRequired,
};

export default Board;
