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
  console.log(listCards);

  //--------- API CALL ------------
  useEffect(() => {
    axios
      .get(`${url}${boardName}/cards`)
      .then((response) => {
        const apiListCards = response.data;
        setListCards(apiListCards);
        console.log(apiListCards[0].card.id);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [boardName]); // this is a dependency array. If one of the dependencies change the callback method will be run, if it is empty it will only run on the first render

  const formSubmitCallback = () => {};

  const deleteCallback = (id) => {};

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
      {listCards.map((el) => {
        return (
          <Card
            key={el.card.id}
            id={el.card.id}
            text={el.card.text}
            emoji={el.card.emoji}
          />
        );
      })}
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
