import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

const Board = ({ url, boardName }) => {
  const [board, setBoard] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(board);

  useEffect(() => {
    axios
      .get(`${url}${boardName}/cards`)
      .then((response) => {
        const apiBoard = response.data;
        setBoard(apiBoard);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [boardName]); // this is a dependency array. If one of the dependencies change the callback method will be run, if it is empty it will only run on the first render

  const addCard = (card) => {
    axios
      .post(url + boardName + "/cards", { text: card.text, emoji: card.emoji })
      .then((response) => {
        const newCard = {
          card: {
            id: response.data.card.id,
            text: response.data.card.text,
            emoji: response.data.card.emoji,
          },
        };
        const newBoard = [newCard, ...board];
        setBoard(newBoard);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };

  const deleteCard = (id) => {
    axios
      .delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        console.log(response);
        const updateBoard = board.filter((card) => card.card.id !== id);
        setBoard(updateBoard); //
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="Myboard">
      <div>Board {boardName}</div>
      {errorMessage ? (
        <div>
          <h2 className="error-msg">{errorMessage}</h2>
        </div>
      ) : (
        ""
      )}
      {board.map((el) => {
        return (
          <Card
            key={el.card.id}
            id={el.card.id}
            text={el.card.text}
            emoji={el.card.emoji}
            deleteCard={deleteCard}
          />
        );
      })}

      <NewCardForm addCardCallback={addCard} />
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
