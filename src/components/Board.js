import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';




const Board = (props) => {

  const [cardData, setCardData] = useState([]); 

  useEffect(() => {
    axios.get(`${props.url}${props.boardName}/cards`)

    .then((response) => {
      let newCardData = []
      for(let i = 0; i < response.data.length; i ++){
        newCardData.push(response.data[i].card);

      }      
      console.log(cardData);
      setCardData(newCardData);
      
    })
    .catch((error)=>{


    })}, []);

    const cards = cardData.map((card) => {
      //console.log(card);
      if(card['emoji'] && card['text']){
        return <li> <Card id={card.id} text={card.text} emoji={card.Emoji}/></li>
      }else if(card['text']){
        return <li> <Card id={card.id} text={card.text}/></li>
      }else{
        return <li> <Card id={card.id} emoji={card.emoji}/></li>
      }

      }
    );

    const deleteCard = (id) => {
      const newCardData = cardData.filter((card) => {
        return card.id !== id;
      });

      if (newCardData.length < cardData.length) {
        axios.delete(`${props.url}cards/${card.id}`)
        .then((response) => {
          setErrorMessage(`Card ${id} is deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${id}`);

        })
        setCardData(newCardData);
      }
    }

  return (
    <div>
      <ul> {cards}</ul>
    </div>
  )
};
Board.propTypes = {

};

export default Board;
