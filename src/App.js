import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';
import NewCardForm from './components/NewCardForm';

const BASE_URL = "https://inspiration-board.herokuapp.com/"
// http://inspiration-board.herokuapp.com/boards/jessica-liang/cards
const App = () => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newCardList = [];

  // console.log(props);
  const deleteCard = (props) => {
    console.log("This is linked to " + props);
    // console.log(BASE_URL + "cards/" + props);
    // const newCardList = cardList.filter((card) => {
    //   console.log(card);
    //   console.log(props);
    //   return card.id !== props;
    // });
    // setCardList(newCardList);

    // if (newCardList.length < cardList.length) {
      axios.delete(BASE_URL + "cards/" + props)
        .then((response) => {
          console.log("This is linked to " + props);

          setErrorMessage(`Card ${ props } deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${ props }`);
        })
      
    }
  // }

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/"
        boardName={`jessica-liang`}
        deleteCardCallBack={deleteCard}
        setCardList={setCardList}
      />
    </section>
  );
};

export default App;
