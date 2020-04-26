import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';




const Board = (props) => { //asncyhronous 

  const [cardData, setCardData] = useState([]); 

  useEffect(() => { //it start loading 
    axios.get(`${props.url}${props.boardName}/cards`)

    .then((response) => {
      let newCardData = []
      for(let i = 0; i < response.data.length; i ++){
        newCardData.push(response.data[i].card);

      }      
      setCardData(newCardData);
      
    })
    .catch((error)=>{


    })}, []); // using api call as an effect hook syays when this code complete then rerender the comonent 
              //  an array of all of the things, if the empty array changes then rerun code (optimization, not necessary) 


    const cards = cardData.map((card, i) => {
      console.log(card);
      if(card.emoji && card.text){
        return <li> <Card key={i} text={card.text} emoji={card.emoji} deleteCard={deleteCard}/></li>
      }else if(card.text){
        return <li> <Card key={i} text={card.text} deleteCard={deleteCard}/></li>
      }else{
        return <li> <Card key={i} emoji={card.emoji} deleteCard={deleteCard}/></li>
      }

      }
    );

      

      
    const [errorMessage, setErrorMessage] = useState('')
      const addCard = (input) => {
        const addedCard = [...cardData];
        const nextId = Math.max(...cardData.map(card => card.id)) + 1

        addedCard.push ({id: nextId, text: input.text, emoji: input.emoji});

        axios.post(`${props.url}${props.boardName}/cards/`,  {id: nextId, text: input.text, emoji: input.emoji})
        .then((response) => {
          setErrorMessage(`Card added`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to add card`);

        });

      
        setCardData(addedCard);
      }



   

    const deleteCard = (id) => {
      const newCardData = cardData.filter((card) => {
        return card.id !== id;
      });

      if (newCardData.length < cardData.length) {
        axios.delete(`${props.url}cards/${id}`)
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
      <ul> {cards} </ul>
      <NewCardForm  addCardCallback={addCard} />
    </div>
  )
};
Board.propTypes = {

};

export default Board;
