import React from 'react';
import PropTypes from 'prop-types';

import './Board.css';
import Card from './Card';

const Board = (props) => {

  const boardComponents = () => { 
    const cardsList = props.cards.map((card) => {
    return(
      <Card
        key={card.card.id}
        id={card.card.id}
        text= {card.card.text}
        emoji= {card.card.emoji}
        onDeleteCallback={props.onDeleteCallback}
        />
      );
    }); 
    return cardsList
  }

  return (
    <div className="board">
      Board
      {boardComponents()}
      <p className="validation-errors-display"></p>
      <p className="validation-errors-display__list"></p>
    </div>
  )
};

Board.propTypes = {
  cards:PropTypes.array,
};

export default Board;
