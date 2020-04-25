import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
  const [message, setMessage] = useState({
    text:'',
    emoji:'',
  });

  const emojiOptions = EMOJI_LIST.map((e, index) => {
    return (
    <option value={e} key={index}>{emoji.getUnicode(`${e}`)}</option>
    )
  })


  const onInputChange = ( (event) => {
    const newInput = {
      ...message,
    }

    newInput[event.target.name] = event.target.value
    setMessage(newInput)
  })

  const onFormSubmit = ((event) => {
    event.preventDefault();

    props.onFormSubmitCallBack(message)

    setMessage({
      text:'',
      emoji: '',
    })
  })


  return (
    <div className="new-card-form">
      <h3 className="new-card-form__header">Create New Card</h3>
      <form className="new-card-form__form" onSubmit={onFormSubmit}>
        <div className="">
          <label className="new-card-form__form-label">Text:</label>
          <textarea
            className="new-card-form__form-textarea"
            name='text'
            placeholder="Type your message here"
            value={message.text}
            onChange={onInputChange}
            />
        </div>
        <div>
          <label className="new-card-form__form-label">Emoji:</label>
          <select
            className="new-card-form__form-select"
            name='emoji'
            value={message.emoji}
            onChange={onInputChange}
            >
             {emojiOptions} 
          </select>
        </div>
        <div>
          <input type="submit" value="Submit" className="new-card-form__form-button" />
        </div>

      </form> 
    </div>
  )
}

NewCardForm.propTypes = {
  onFormSubmitCallBack:PropTypes.func.isRequired,
};

export default NewCardForm;