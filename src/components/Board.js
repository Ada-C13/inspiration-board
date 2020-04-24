import React, { useState ,useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {

  return (
    <div className='Board'>
      <p>Board</p>
    </div>
  )
};
Board.propTypes = {

};

export default Board;
