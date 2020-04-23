import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios'

const App = () => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newCardList = [];

  const deleteCard = (props) => {
    console.log("This is linked to " + props);
    const newCardList = cardList.filter((card) => {
      return card.id !== props;
    });

    if (newCardList.length < cardList.length) {
      axios.delete(props.url + "cards/:" + props)
        .then((response) => {
          setErrorMessage(`Card ${ props } deleted`);
        })
        .catch((error) => {
          setErrorMessage(`Unable to delete card ${ props }`);
        })
      setCardList(newCardList);
    }
  }

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/"
        boardName={`jessica-liang`}
        deleteCardCallBack={deleteCard}
      />
    </section>
  );
};

export default App;
