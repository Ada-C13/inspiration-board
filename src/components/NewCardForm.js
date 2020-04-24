import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


const NewCardForm = (props) =>{

    const [input, changeInput] = useState({
        text: '', 
        emoji: '',
    })

    const [currentId, changeCurrentId] = useState();
    
   
    const onInput = (event) => {
        const newInput = {
          ...input,
        }
        newInput[event.target.name] = event.target.value;
        changeInput(newInput);
    }


    const onAddCard = (event) => {

      event.preventDefault();

        //create a function that calls back to game and adds the card

      props.addCardCallback(input);
      changeInput({
        text: '', 
        emoji: '',
      })



    }

    return (
        <div className='new-card-form'> 
                <form onClick={onAddCard} > 
                    <header> Add A Card </header>
                    <label htmlFor='text' className='new-card-form__form-label'> Text </label>
                    <input key={`${props.id}`} className='text' />

                    <label htmlFor='emoji'  className='new-card-form__form-label'> Emoji </label>
                    <input key={`${props.id}`} className='emoji' /> 


                </form>


                <button type='submit' className='new-card-form__form-button'>
                    Submit Card
                </button>

        </div>


    );
}

export default NewCardForm; 