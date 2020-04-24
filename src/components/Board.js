import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    //our API call
    axios.get(props.url + props.boardName + "/cards")
      .then((response) => {
        const cardListFromAPI = response.data.map( (card, i) => {
          return (
            <li key={card.card.id}>
              <Card 
              text={card.card.text}
              emoji={card.card.emoji}
            />
            </li> 
          )
        })
        setCardList(cardListFromAPI)
      })
      .catch((error) =>{
        setErrorMessage(error.message);
      })
  }, []);

  return (
    <div>
      {cardList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
