import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

const [formFields, setFormFields] = useState({
	text: '',
	emoji: ''
});

const onFieldChange = (event) => {
  const updatedFormState = {...formFields};

  updatedFormState[event.target.name] = event.target.value;
  setFormFields(updatedFormState);
}

const onSubmitHandler = (event) => {
  event.preventDefault();

  if(formFields.text || formFields.emoji){
    props.addCardCallBack(formFields)
  }

  setFormFields({
    text: '',
    emoji: ''  
  })
}
const emojiOptions = EMOJI_LIST.map((emoji, i) => <option key={ i } value={ emoji }>{ emoji }</option>);

return (
<form className="new-card-form" onSubmit={ onSubmitHandler }>
        <h1>Add a Card</h1>
        <div>
          <div>
            <label htmlFor="text">Text: </label>
            <input
              name="text"
              id="text"
              onChange={ onFieldChange }
              value={ formFields.text }
            />
          </div>
          <div>
            <label htmlFor="emoji">Emoji: </label>
            <select
              name="emoji"
              id="emoji"
              onChange={ onFieldChange }
              value={ formFields.emoji }
            >
              { emojiOptions }
            </select> 
          </div>
          <input
            type="submit"
            name="submit"
            value="Submit"
            onClick={ onSubmitHandler }
          />
        </div>
      </form>
  )
}

export default NewCardForm;
