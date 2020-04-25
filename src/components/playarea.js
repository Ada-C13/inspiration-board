// // import React, { Component } from 'react';
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
// import './NewCardForm.css';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

// const NewCardForm = (props) => {
    
//   const [phrase, setPhrase] = useState(defaultValues)

//   const defaultValues = {
//     text: "",
//     emoji: ""
//   };;

//   const onInputChange = (event) => {
//     console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);  
//     const newPhrase = {
//       ...phrase,
//       text: event.target.value,
//     };
//     setPhrase(newPhrase);
//     console.log(`hereis a newPharse ${newPhrase}`)
//   };

//   const onEmojiChange = (event) => {
//     console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);  
//     const newPhrase = {
//       ...phrase,
//       emoji: event.target.value
//     };
//     setPhrase(newPhrase);
//   };

//   const onFormSubmit = (event) => {
//     event.preventDefault()  
//     props.onSubmitCallback(phrase)
//   }


//   // <input className={playerSubmission.noun1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
//   //           value={playerSubmission.noun1} 
//   //           onChange={onNoun1Entry}
//   //           placeholder="noun"/>

//   //           const onNoun1Entry = (event) => {
//   //             const newEntry = {
//   //               ...playerSubmission, 
//   //               noun1: event.target.value
//   //             };
//   //             setPlayerSubmission(newEntry);
//   //           };

// return(

// <form className="new-card-form"
//     onSubmit={onFormSubmit}>

//   <div classname="new-card-form__form">
//   <h2 className="new-card-form__header">New Card</h2>
//     <label htmlFor="writePost" className="new-card-form__form-label">Write Post: </label>
//       <input
//         // name="text"
//         placeholder="Say amazing things"
//         value={phrase.text}
//         onChange={onInputChange}
//         // type="text"
//         className="new-card-form__form"
//       />
//       <inpu
//         // name="emoji"
//         placeholder="Optional Emoji"
//         value={phrase.emoji}
//         onChange={onEmojiChange}
//         // type="text"
//         className="new-card-form__form"
//       />
//   </div>
//   <div className="new-card-form__form-button">
//           <input type="submit" value="submit card" className="new-card-form__form-button" onSubmit={onFormSubmit} />
//   </div>
// </form>
//   );
// };

//   export default NewCardForm;