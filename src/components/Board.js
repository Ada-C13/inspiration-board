import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


const Board = (props) => {
  const [cardData, setCardData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
    //our API call
    axios.get(props.url + props.boardName + "/cards")
      .then((response) => {

        const cardDataFromAPI = response.data.map( (card) => {
              return({text: card.card.text,
              emoji: card.card.emoji,
              id: card.card.id,
              })
        })

        setCardData(cardDataFromAPI)
      })
      .catch((error) =>{
        setErrorMessage(error.message);
      })
  }, []);

  const DELETE_URL = "https://inspiration-board.herokuapp.com/cards/"
  const deleteCard = (id) =>{
    const newcardData = cardData.filter((card) =>{
      return card.id !== id
    })

    if(newcardData.length < cardData.length){
      axios.delete(DELETE_URL + id)
      .then(response =>{
        setErrorMessage (`Card ${id} deleted`);
      })
      .catch ((error) => {
        setErrorMessage(`Unable to delete card ${id}`);
      })
      setCardData(newcardData)
    }
  };

  const addCard = (card) => { 
    axios.post("https://inspiration-board.herokuapp.com/boards/lak-and-katie/cards", card)
      .then((response) =>{
        const updatedCardData = [response.data.card, ...cardData];
        setCardData(updatedCardData);
        setErrorMessage('');
      })
      .catch((error) =>{
        setErrorMessage(error.message)
      });
  }

  const cards = cardData.map( (card, i) => {
    return (
      <li key={i}>
        <Card 
        text={card.text}
        emoji={card.emoji}
        id={card.id}
        onDeleteCallback = {deleteCard}
      />
      </li> 
    )
  });

  return (
    <div>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      <NewCardForm addCardCallback={addCard}/>
      {cards}
    </div>

  )
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
