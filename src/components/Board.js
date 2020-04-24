import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

const createBoard = (props) => {
  const board = {
    board: [], //array is going to hold all the cards
    boardName: props.boardName,
    boardURL: props.url,
    error: "",
  };

  return board;
};

const Board = (props) => {
  const [listCards, setListCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null); //api error message
  const [board, setBoard] = useState(createBoard()); //props inside createBoard?

  const deleteCallback = (id) => {};

  return (
    <div className="Myboard">
      <div>Board</div>
      <Card id="id" text="" deleteCallback={deleteCallback(id)} emoji="" />
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;

//allCards
//formSubmitCallback
//board has a name or an unique id
