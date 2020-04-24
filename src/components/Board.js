import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

const Board = ({ url, boardName }) => {
  const [listCards, setListCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null); //api error message

  //--------- API CALL ------------

  useEffect(() => {
    axios
      .get(`${url}${boardName}`)
      .then((response) => {
        const apiListCards = response.data;
        setListCards(apiListCards);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [listCards]);
  console.log(listCards);
  const formSubmitCallback = () => {};

  const deleteCallback = (id) => {};

  return (
    <div className="Myboard">
      <div>Board</div>
      {errorMessage ? (
        <div>
          <h2 className="error-msg">{errorMessage}</h2>
        </div>
      ) : (
        ""
      )}
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

//if something is always a prop you dont need to track in state, because you are never going to change it

// const createBoard = () => {
//   const board = {
//     board: [], //array is going to hold all the cards
//     boardName: props.boardName,
//     boardURL: props.url,
//     error: "",
//   };
//   return board;
// };
