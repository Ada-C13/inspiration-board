import React, { useState, Component, useEffect } from 'react';
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
    axios.get(props.url + props.boardName + "/cards")
    .then((response) => {
      const apiCardList = response.data;
      setCardList(apiCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);
  
  console.log(cardList);
  
  const boardComponent = cardList.map((card, i) => {
    return (
      <Card 
        key={i}
        text={card.card["text"]}
        emoji={card.card["emoji"]}
      />
    )
  });

  return (
    <div className='board'>
      {boardComponent}
    </div>
  )
};



Board.propTypes = {

};

export default Board;
