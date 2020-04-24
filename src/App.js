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

// Add a delete button on each card which will remove a card from the Board and delete it from the API.
// Create a NewCardForm component which will add new cards to the board and trigger POST requests to the API to create a card on the API.
// Create a shallow snapshot tests for the Card and NewCardForm components