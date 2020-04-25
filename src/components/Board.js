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

  const cardComponents = cards.map((card) => {
    let singleEmoji = card.card.emoji;
    if (singleEmoji !== null) {
      singleEmoji = emoji.getUnicode(card.card.emoji);
    }
    
    return ( <Card id={card.card.id} text={card.card.text} emoji={singleEmoji} />);
  });



  // const deleteStudent = (id) => {
  //   const newStudentList = studentList.filter((student) => {
  //     return student.id !== id;
  //   });

  //   if (newStudentList.length < studentList.length) {
  //     axios.delete(`${ API_URL_BASE }/${ id }`)
  //       .then((response) => {
  //         setErrorMessage(`Student ${ id } deleted`);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(`Unable to delete student ${ id }`);
  //       })
  //     setStudentList(newStudentList);
  //   }
  // }
  
  return (
    <div className="board">
     {cardComponents}

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