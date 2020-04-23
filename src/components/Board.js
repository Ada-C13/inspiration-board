import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
  // const boardComponents = CARD_DATA.cards.map((card, i) => {
  //   return (
  //     <li key={i}>
  //       <Card 
  //         text={card.text} 
  //         emoji={card.emoji} 
  //       />
  //     </li>
  //   );
  // });

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newCardList = [];

  useEffect(() => {
    axios.get(props.url + "boards/" + props.boardName + "/cards")
    .then( (response) => {
      for (let card of response.data) {
        newCardList.push(
        <li key={card.card.id}>
          <Card
            key={card.card.id}
            id={card.card.id}
            text={card.card.text}
            emoji={card.card.emoji}
            deleteCardCallBack={props.deleteCardCallBack}
          />
        </li>
        );
      };

      setCardList(newCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, []);

  // const deleteCard = (props) => {
  //   console.log("This is linked to " + props);
  //   const newCardList = cardList.filter((card) => {
  //     return card.id !== props;
  //   });

  //   if (newCardList.length < cardList.length) {
  //     axios.delete(props.url + "cards/:" + props)
  //       .then((response) => {
  //         setErrorMessage(`Card ${ props } deleted`);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(`Unable to delete card ${ props }`);
  //       })
  //     setCardList(newCardList);
  //   }
  // }

  return (
    <div>
      <NewCardForm />
      
      { cardList }
    </div>
  );
};
Board.propTypes = {
  
};

export default Board;
