import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = (props) => {
  

  // const API_URL_BASE = props.url

  // const [cardList, setCards] = useState([])

  // useEffect(() => {
  //   return `${API_URL_BASE}${props.boardName}`
  // }, []);

  return (
    <div>
      Board
    </div>
  )
};
Board.propTypes = {

};

export default Board;
