import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]
const NewCardForm = () => {
return(


<form className="new-card-form">

  <div classname="new-card-form__form">
  <h2 className="new-card-form__header">New Card</h2>
    <label htmlFor="writePost" className="new-card-form__form-label">Write Post: </label>
      <input
        name="Submit post"
        placeholder="Say amazing things"
        type="text" 
      />
  </div>
  </form>
  );
};
    {/* <input
        className={playerSubmission.adjective1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
        value={playerSubmission.adjective1} 
        onChange={onAdj1Entry}
        placeholder="adjective"/>

const onSubmit = (event) => {
    event.preventDefault();
    updatePlayer();
    const newLine = `The ${playerSubmission.adjective1} ${playerSubmission.noun1} ${playerSubmission.adverb1} ${playerSubmission.verb1} the ${playerSubmission.adjective2} ${playerSubmission.noun2}`;
    props.onSubmitCallback(newLine); 
    setPlayerSubmission(defaultValues); 
  }; */}

  export default NewCardForm;