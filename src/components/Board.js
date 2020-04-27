import React, { useState, useEffect, } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const emoji = require("emoji-dictionary");

const Board = (props) => {
  const API_CARD_URL = `${props.url}${props.boardName}/cards`   // source: https://github.com/AdaGold/inspiration-board-api
  const [cards, setCardList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  // load cards
  // source: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/apis-get.md
  useEffect( () => {
    axios.get(API_CARD_URL)
      .then((response) => {
        const apiData = [...response.data, ...cards]; //a combined array of all cards (objects)
        setCardList(apiData); //updating the cards list with the response from the API 
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }, []);

  // delete a card
  const removeCard = (id) => {
      // generate new list of cards without the card that is about to be deleted
      const updatedCards= cards.filter((cardObj) => {
        return cardObj.card.id !== id;
      });

      // ensure new list length is shorter than previous one
      if (updatedCards.length < cards.length) { 
        axios.delete(`${ props.cardsUrl }/${ id }`)
          .then((response) => {
            setErrorMessage(`Card deleted`);
          })
          .catch((error) => {
            setErrorMessage(`Unable to delete card`);
          })
        setCardList(updatedCards);
      }
  };

  // add a card 
  const addCard = (card) =>{
    axios.post(API_CARD_URL, card)
      .then( (response) => {
        // response is a card object, add it to cards
        const updatedCardList = [response.data, ...cards];
        setCardList(updatedCardList);
        setErrorMessage('Card Added!');
      })
      .catch( (error) => {
        setErrorMessage(error.message);
      });
  }

    // turn each card object into a card component
    const cardComponents = cards.map((cardObj) => {
      return(< Card 
        id={cardObj.card.id}
        text={cardObj.card.text} 
        emoji={cardObj.card.emoji === null ? "" : emoji.getUnicode(cardObj.card.emoji)}
        removeCardCallback={removeCard}
        key={cardObj.card.id}
      />)
    })

  return (
    <div className="board">   
      {errorMessage ? <div><h2>{errorMessage}</h2></div> : ''}
      <NewCardForm addCardCallback={addCard}/>
      {cardComponents}
    </div>
  )
}

export default Board;

// Before Refactoring:
  // useEffect(() => {
  //   axios.get(API_CARD_URL)
  //     .then((response) => {
  //       const apiData = response.data; //an array of all cards (objects)
  //       const cardAPI = apiData.map((card) => {
  //         return {
  //           id: card.card.id,
  //           text: card.card.text,
  //           emoji: card.card.emoji,
  //         };
  //       });
  //       setCardList(cardAPI); //updating the cards list with the response from the API 
  //     })
  //     .catch((error) => {
  //       errorMessage(error.message);
  //     });
  // }, []);