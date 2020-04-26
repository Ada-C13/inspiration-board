import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const emoji = require("emoji-dictionary");

const Board = (props) => {
  const [cards, setCards] = useState([]);

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
    const newCards = cards.filter((card) => {
      return card.card.id !== id;
    });

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
    axios.post(`${props.url}/${props.boardName}/cards`, card)
      .then((response) => {
        const updatedData = [...cards, response.data];
        setCards(updatedData);
      })
      .catch((error) => {
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
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;


