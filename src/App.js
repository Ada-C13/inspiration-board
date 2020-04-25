import React, { useState , useEffect} from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';
import Card from './components/Card';
import NewCardForm from './components/NewCardForm';


const API_URL_BASE = "https://inspiration-board.herokuapp.com/boards/"

const App = () => {

  const [boardName,setBoardName] = useState('ross-lex');
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const getCard = `${API_URL_BASE}${boardName}/cards`

  // const onDeleteButtonClickCallback = ( (`https://inspiration-board.herokuapp.com/cards/${id}`) => {
  //   const afterDeleteButtonClick = cards.filter(card => card.id !== id);
  //   setCardList(cardList);
  //   })
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //   })
  // };


  // Currently, after clicking the delete button, user has to refresh the page to in order to see the updated list.
  // TODO: remove the card right away
  const onDeleteCallback = ((id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        const updatedCardList = cardList.filter(card => card.id !== id)
        setCardList(updatedCardList);
      })
      .catch((error) =>{
        setErrorMessage(error.message);
      })
    })

  const addCard = ((card) => {
    axios.post(getCard, card)
    .then((response) => {
      const updatedData = [...cardList, response.data];
      setCardList(updatedData);
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }) 
  
  useEffect(() => {
    axios.get(getCard)
    .then((response) => {
      const apiCardList = response.data;
      setCardList(apiCardList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
       console.log(error.message);
    });
 }, []);



  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      <Board
        cards={cardList}
        onDeleteCallback={onDeleteCallback} 
      />
      <NewCardForm onFormSubmitCallBack={addCard}/>
    </section>
  );
};

export default App;
