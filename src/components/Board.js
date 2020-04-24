import React, { useState, Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';



const Board = (props) => {
  
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {    
    axios.get(props.url + "boards/" + props.boardName + "/cards")
    .then((response) => {
      const apiCardList = response.data;
      setCardList(apiCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);
  
//   {
//     "card": {
//         "id": 4888,
//         "text": null,
//         "emoji": "heart_eyes"
//     }
// }


  //console.log(cardList);
  // url="https://inspiration-board.herokuapp.com/boards/"
// https://inspiration-board.herokuapp.com/cards/:card_id
  const onClickCallback = (id) =>{
    axios.delete(props.url +`cards/` + id)
    .then((response) => {
      const newCardList = [];
      for (let card of cardList) {
        if (card.card["id"] !== id) {
          newCardList.push(card);
        }
      };
      setCardList(newCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    })
  };
  
  const boardComponent = cardList.map((card, i) => {
    return (
      <Card 
        key={card.card["id"]}
        text={card.card["text"]}
        emoji={card.card["emoji"]}
        id={card.card["id"]}
        onClickCallback={onClickCallback}
      />
    )
  });

  return (
    <div className='board'>
      {boardComponent}
    </div>
  )
};



Board.propTypes = {

};

export default Board;
