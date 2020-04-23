import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  // const boardComponents = CARD_DATA.cards.map((card, i) => {
  //   return (
  //     <li key={i}>
  //       <Card 
  //         text={card.text} 
  //         emoji={card.emoji} 
  //       />
  //     </li>
  //   );
  // });

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newCardList = [];

  useEffect(() => {
    axios.get(props.url + props.boardName + "/cards")
    .then( (response) => {
      for (let card of response.data) {
        newCardList.push(<Card
          key={card.card.id}
          text={card.card.text}
          emoji={card.card.emoji}
        />);
      };
      
      setCardList(newCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    }) 
  })

  return (
    <div>
      { cardList }
    </div>
  );
};
Board.propTypes = {
  
};

export default Board;
