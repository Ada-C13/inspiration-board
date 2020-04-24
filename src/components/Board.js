import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
//import CARD_DATA from '../data/card-data.json'; <--- hard coded data

const Board = (props) => {

  // const [cardData, setCardData] = useState([]); 
  // // Resource: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/apis-get.md
  // useEffect(() => {
  //   axios.get(`${ props.url } ${ props.boardName }/cards`)
  //   .then( (response) => {
  //     let newData = []
  //     // How to handle successful response
  //     for (let i = 0; i < response.data.length; i ++) {
  //       newData.push(response.data[i].card);
  //     }      
  //     console.log(cardData);
  //     setCardData(newData);
  //   })
  //   .catch( (error) => {
  //     // Need to handle erros
  //   });
  // },[]);

  const cards = cardData.map((card) => {

    if(card['emoji'] && card['text']) {
      return <p> <Card id={card.id} text={card.text} emoji={card.emoji}/> </p>
    }else if (card['text']) {
      return <p> <Card id={card.id} text={card.text}/> </p>
    }else{
      return <p> <Card id={card.id} emoji={card.emoji}/> </p>
    }
    
  });

  return (
    <div>
      <p>{ cards }</p>
    </div>
  );
}

Board.propTypes = {

};

export default Board;
