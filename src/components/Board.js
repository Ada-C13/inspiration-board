import React, { useState, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
  
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {    
    axios.get(props.url + "boards/" + props.boardName + "/cards")
    .then((response) => {
      const apiCardList = response.data;
      setCardList(apiCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);
  
  const onClickCallback = (id) =>{
    axios.delete(props.url +`cards/` + id)
    .then((response) => {
      const newCardList = [];
      for (let card of cardList) {
        if (card.card["id"] !== id) {
          newCardList.push(card);
        }
      };
      setCardList(newCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  };
  
  const addNewCard = (text, emoji) => {
    axios.post((props.url + "boards/" + props.boardName + "/cards"), {
      text: text,
      emoji: emoji
    })
    .then((response) => {
      const newCardList = [...cardList, response.data];
      setCardList(newCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  }

  const boardComponent = cardList.map((card, i) => {
    return (
      <Card 
        key={card.card["id"]}
        text={card.card["text"]}
        emoji={card.card["emoji"]}
        id={card.card["id"]}
        onClickCallback={onClickCallback}
      />
    )
  });

  return (
    <div className='board'>
      {boardComponent}
      <NewCardForm />
    </div>
  )
};



Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
