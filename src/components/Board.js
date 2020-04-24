import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';


const Board = (props) => {
  const [cards, setCards] = useState([]);
  

  useEffect(() => {
    axios.get(props.url + "/boards/" + props.boardName + "/cards")
      .then( (response) => {
        console.log(`SUCCESS: ${JSON.stringify(response.data)}`)
        setCards(response.data);
      })
      .catch((error) => {
        console.log(`ERROR: ${error}`)
      });
  }, []);

  
  const deleteCard=(deletedcard)=>{
    const cardsupdated = [];

    cards.forEach((card)=>{
      if(card.card.id.toString() === deletedcard.target.id.toString()){
        axios.delete(props.url + '/cards/' + deletedcard.target.id)
        .then( (response) => {
          console.log(`SUCCESSFUL DELETION`)
        })
        .catch((error) => {
          console.log(`ERROR could not delete: ${error}`)
        });
      } else { cardsupdated.push(card); }
    });

    setCards(cardsupdated);
  };
  //




  const getCards = () => {
    console.log(`Fetching from state: ${JSON.stringify(cards)}`)
    const processed = cards.map(card => {
      return(
      <Card id={card.card.id} text={card.card.text} emoji={card.card.emoji} onDeleteCallBack={deleteCard} />
      );
    })
    return processed;
  }


  return (
    <div>
      {getCards()}
    </div>
  )
};

Board.propTypes = {

};

export default Board;
