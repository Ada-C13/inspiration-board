import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

const Board = ({ url, boardName }) => {
  const [listCards, setListCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null); //api error message
  const [board, setBoard] = useState([])

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

  // const formSubmitCallback = () => {};

  const addCard = (card) => {
    axios
      .post(url + boardName + '/cards', {text: card.text, emoji: card.emoji})
      .then((response) => {
        const newCard = {
          "card": {
            "id": response.data.card.id,
            "text": response.data.card.text,
            "emoji": response.data.card.emoji,
          }
        }
        setBoard(board.push(newCard));  
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      })
  };

  const deleteCard = (id) => {
    axios.delete(`${url}${boardName}/cards/${id}`)
    .then((response) => {
      const updateBoard = response.data.filter((card) => card.card.id !== id);
      setBoard(updateBoard);
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
      {listCards.map((el) => {
        return (
          <Card id={el.card.id} text={el.card.text} emoji={el.card.emoji} deleteCardCallback={deleteCard}/>
        );
      })}
      
      <NewCardForm addCardCallback={addCard}/>
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
