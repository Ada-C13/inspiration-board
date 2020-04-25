import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
  
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    axios.get(`${props.url}boards/${props.boardName}/cards`)
      .then((response) => {
        const apiCardsList = response.data;
        setCardsList(apiCardsList);
      })
      .catch((error) => {
        console.log(error.message);
      });

  }, []);

  const onDeleteClick = (event) => {
    const cardId = event.target.name;
    axios.delete(`${props.url}cards/${cardId}`)
      .then((response) => {
        const deleteResponse = response.data;
        console.log(`response`, deleteResponse); // check if id on response matches
      })
      .catch((error) => {
        console.log(error.message);
      });


  }

  const createCards = () => {

    return cardsList.map((cardWrapper) => {
      return (
        <Card
        key={cardWrapper.card.id}
        id={cardWrapper.card.id}
        text={cardWrapper.card.text}
        emoji={cardWrapper.card.emoji}
        onDeleteClick={onDeleteClick}
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
