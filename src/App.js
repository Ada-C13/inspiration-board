import React from 'react';
import './App.css';
import Board from './components/Board';

const BASE_URL = "https://inspiration-board.herokuapp.com/"

const App = () => {

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <section className="app">
        <Board
          url={BASE_URL}
          boardName={`jessica-liang`}
        />
      </section>
    </section>
  );
};

export default App;
