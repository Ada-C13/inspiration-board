import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`Jocelyn-Haben`}
      />
    </section>
  );
};

export default App;

// Use hardcoded data form data folder to populate the board
// Build the Card component to display a single inspirational quote and optional emoji
// Build a Board component which renders a list of Cards from hardcoded data