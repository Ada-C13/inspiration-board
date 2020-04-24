import React from "react";
import "./App.css";
import Board from "./components/Board";

const App = () => {
  return (
    <section>
      <header className="header">
        <h1 className="header__h1">
          <span className="header__text">Inspiration Board</span>
        </h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`Pinreact`} //let's pick a name
      />
    </section>
  );
};

export default App;

// ------ PROPS -------
//formSubmitCallback
//allBoardsState

// ------- CREATING NEXT ID ------

//----- GET API ----------------
//const App = () => {
// const [studentList, setStudentList] = useState([]);
//;

// useEffect(() => {
//   axios.get(API_URL_BASE)
//     .then((response) => {
//       const apiStudentList = response.data;
//       setStudentList(apiStudentList);
//     })
//     .catch((error) => {
//       setErrorMessage(error.message);
//       console.log(error.message);
//     });
// }, []);

//-----RETURN THE ERROR MESSAGE------
//<div className="App">
//{ errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
