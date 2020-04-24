import React ,{useState}from 'react';
import './App.css';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';

const App = () => {
  const [newcard,setNewCard] = useState({text:null, emoji:null});

  const onInputChange = (event) =>{
    console.log(`changed ${event.target.value}`);
    // const newSubmitCard = {...newcard};
    // newSubmitCard[`${text}`] = event.target.value;
    // setNewCard(newSubmitCard);

  };



  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <NewCardForm onChangeCard={onInputChange}/>
      <Board
        url="https://inspiration-board.herokuapp.com"
        boardName={`Victory-Anaconda`}
      />
    </section>
  );
};

export default App;
