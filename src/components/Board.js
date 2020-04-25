
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const reformatData = (data)=> {
  return data.map((element) => {
    return element.card;
  });
};

const Board = (props) => {

  const [cardList, setCardList] = useState([]);

  const endPoint = `${props.url}/${props.boardName}`

  const getCards = (url) => {
    axios.get(`${url}/cards`)
      .then((response) => {
        const apiCardList = reformatData(response.data);
        setCardList(apiCardList);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => { getCards(endPoint); }, [endPoint] );

  const formatCards = cardList.map((card) => {

    return (
      <Card
        key={card.id}
        id={card.id}
        text={card.text}
        emoji={card.emoji}
      />
    );
  });

  return (
    <div className="board">
      {formatCards}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
