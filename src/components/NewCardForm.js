import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {

  const [card, setCard] = useState({
    text: "",
    emoji: "",
  })

  const onInputChange = (event) => {
    const {name, value} = event.target; 
    const newCard = {...card};

    newCard[name] = value;
    setCard(newCard);
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback(card);

    setCard({
      text: "",
      emoji: "",
    });
  };

  const generateEmojis = EMOJI_LIST.map((my_emoji, i) => {
    return (
      <option key={i} value={my_emoji}>
        { emoji.getUnicode(my_emoji) }
      </option>
    );
  })


  return (
    <>
      <h2 className="new-card-form__header">Add a new card!!</h2>
      <div className="new-card-form">
        
        <form 
          className="new-card-form__form" 
          onSubmit={onFormSubmit}
          data-testid="new-card-form--form"
        >

          <div>
            <label className="new-card-form__form-label" htmlFor="text"
            ></label>
            <textarea 
              className="new-card-form__form-textarea"
              id="text"
              name="text"
              onChange={onInputChange}
              value={card.text}
              placeholder="Type something..."
              data-testid="new-card-form--text"
            />

          </div>
          <div>
            <label className="new-card-form__form-label" htmlFor="emoji"></label>
            <select 
              className="new-card-form__form-select"
              id="emoji"
              name="emoji"
              onChange={onInputChange}
              value={card.emoji}
              data-testid="new-card-form--emoji"
            >
              <option value=""> --emoji-- </option>
              { generateEmojis }
            </select>

            <input 
              className="new-card-form__form-button" 
              type="submit" 
              value="Add Card"
            />
          </div>
        </form>
      </div>
    </>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;