import React from 'react';
import './App.css';
import Board from './components/Board';

const data = [
  {
    "card": {
      "id": 4733,
      "text": "'Be patient'",
      "emoji": "'heart'"
    }
  },
  {
    "card": {
      "id": 4731,
      "text": "Tofu-tofu-2 loves you A LOT!!",
      "emoji": "heart"
    }
  }];

const App = () => {
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`Ada-Lovelace`}
        // cardList = {data}
      />
    </section>
  );
};

export default App;
