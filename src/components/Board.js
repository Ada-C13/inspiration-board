import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const emoji = require("emoji-dictionary");
// console.log(emoji.getUnicode("heart_eyes"));
console.log(emoji.unicode);

const Board = (props) => {
  const [cards, setCards] = useState([]);

  // https://inspiration-board.herokuapp.com/boards/hannah-nataliya/cards
  useEffect(() => {
    axios.get(`${props.url}/${props.boardName}/cards`)
      .then((response) => {
        const apiCards = response.data;
        setCards(apiCards);
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }, []);

  const deleteCard = (id) => {
    console.log(id);
    const newCards = cards.filter((card) => {
      return card.card.id !== id;
    });

    // https://inspiration-board.herokuapp.com/cards/:card_id
    if (newCards.length < cards.length) {
      axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
        .then((response) => {
         console.log(`Card ${ id } deleted`);
        })
        .catch((error) => {
          console.log(`Unable to delete card ${ id }`);
        })
      setCards(newCards);
    }
  }

  const addCard = (card) => {
    console.log(card);
    // https://inspiration-board.herokuapp.com/boards/:board_name/cards
    axios.post(`${props.url}/${props.boardName}/cards`, card)
      .then((response) => {
        // What should we do when we know the post request worked?
        const updatedData = [...cards, response.data];
        setCards(updatedData);
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        console.log(error.message);
    });
  };

  const cardComponents = cards.map((card) => {
    let singleEmoji = card.card.emoji;
    if (singleEmoji !== null) {
      singleEmoji = emoji.getUnicode(card.card.emoji);
    }
    
    return (<Card 
                id={card.card.id}
                text={card.card.text}
                emoji={singleEmoji}
                deleteCard={deleteCard}
            />);
  });

  return (
    <div>
      <NewCardForm addCard={addCard} />
      <div className="board">
        {cardComponents}
      </div>
    </div>
  )
};
Board.propTypes = {

};

export default Board;


// [
//   {
//       "card": {
//           "id": 6066,
//           "text": "you are perfect the way you are",
//           "emoji": "princess"
//       }
//   },
//   {
//       "card": {
//           "id": 6065,
//           "text": "you are doing enough",
//           "emoji": "ok_hand"
//       }
//   },
//   {
//       "card": {
//           "id": 6064,
//           "text": "you are cool",
//           "emoji": "hibiscus"
//       }
//   }
// ]