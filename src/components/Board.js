import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {

  const [cardData, setCardData] = useState([]); 
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => { 
    axios.get(`${props.url}${props.boardName}/cards`)
    .then((response) => {
      let newCardData = []
      for(let i = 0; i < response.data.length; i ++){
        newCardData.push(response.data[i].card);

      }      
      setCardData(newCardData);
      
    })
    .catch((error)=>{
      setErrorMessage("could not get cards");


    })}, []); 

  const deleteCard = (id) => {
    const newCardData = cardData.filter((card) => {
      return card.id !== id;
    });
    
    if (newCardData.length < cardData.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        setErrorMessage(`Card ${id} is deleted`);
      })
      .catch((error) => {
        setErrorMessage(`Unable to delete card ${id}`);
      })
    }
    setCardData(newCardData);
  }

  const cards = cardData.map((card) => {
  
    if(card.emoji && card.text){
      return <Card key={card.id} id={card.id} text={card.text} emoji={card.emoji} deleteCard={deleteCard}/>
    }else if(card.text){
      return <Card key={card.id} id={card.id} text={card.text} deleteCard={deleteCard}/>
    }else{
      return <Card  key={card.id} id={card.id} emoji={card.emoji} deleteCard={deleteCard}/>
    }

    }
  );


  const addCard = (input) => {
    const addedCard = [...cardData];
    const nextId = Math.max(...cardData.map(card => card.id)) + 1

    const newCard = {id: nextId, text: input.text, emoji: input.emoji};

    addedCard.push(newCard);

    axios.post(`${props.url}${props.boardName}/cards`, {id: nextId, text: input.text, emoji: input.emoji})
    .then((response) => {
      setErrorMessage(`Card added`);
    })
    .catch((error) => {
      console.log(newCard);
      setErrorMessage(`Unable to add card`);
    
    });

    setCardData(addedCard);
  }

  return (
    <div>
      <div> {cards} </div>
      <NewCardForm  addCardCallback={addCard} />
    </div>
  )
};

Board.propTypes = {
  url: PropTypes.string.isRequired, 
  boardName: PropTypes.string.isRequired
};

export default Board;
