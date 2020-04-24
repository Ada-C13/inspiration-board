import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {

  const createCards = () => {

    return CARD_DATA.cards.map((card, index) => {
      return (
        <Card
        key={index}
        text={card.text}
        emoji={card.emoji}
        />
      )
    });

  };

  return (
    <section>
      <div>
        {createCards()}
      </div>
    </section>
  )
};

Board.propTypes = {
url: PropTypes.string.isRequired,
boardname: PropTypes.string.isRequired,
};

export default Board;
