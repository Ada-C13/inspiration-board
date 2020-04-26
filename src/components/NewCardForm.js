import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = (props) =>{
  
  const [input, changeInput] = useState({
      text: '', 
      emoji: '',
  });

  const onInput = (event) => {
      const newInput = {
        ...input,
      }
      newInput[event.target.name] = event.target.value;
      changeInput(newInput);
  }

  const onAddCard = (event) => {
    event.preventDefault();
    props.addCardCallback(input);

    changeInput({
      text: '', 
      emoji: '',
    });
  };

  return (
  
  <form  className='.new-card-form__form' onSubmit={onAddCard}> 
      <div className='new-card-form'>
        <header> Add A Card </header>
        <label htmlFor='text' className='new-card-form__form-label'> Text: </label>
        <input onChange={onInput} className='text new-card-form__form-textarea' name='text' value={input.text}/> 

        <label htmlFor='emoji'  className='new-card-form__form-label'> Emoji: </label>
        <input  onChange={onInput} className='emoji new-card-form__form-textarea' name='emoji' value={input.emoji}/> 

        <input type='submit' value='submit card' className='new-card-form__form-button'/>
      </div>
  </form>


  );
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
}

export default NewCardForm; 