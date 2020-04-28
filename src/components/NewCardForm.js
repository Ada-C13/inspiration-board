import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = emoji.names;

const NewCardForm = (props) => {

  const [formFields, setFormFields] = useState({
    text: '',
    emoji: '',
  });

  const onInputChange = (event) => {
    const newFormFields = { ...formFields };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.addCardCallBack(formFields);
    setFormFields({
      text: '',
      emoji: '',
    });
  };

  const emojiValid = () => {
    return EMOJI_LIST.includes(formFields.emoji);
  };

  return (
    <form
      className="new-card-form"
      onSubmit={onSubmit}
    >
      <h3 className="new-card-form__header">Add Card</h3>
      <div>
        <label className="new-card-form__form-label" htmlFor="text">Text:</label>
        <input
          className="new-card-form__form-textarea"
          name="text" onChange={onInputChange}
          value={formFields.text}
        />
      </div>
      <div>
        <label className="new-card-form__form-label" htmlFor="emoji">Emoji:</label>
        <input
          className={emojiValid() ? "valid" : "invalid"}
          name="emoji" onChange={onInputChange}
          value={formFields.emoji}
        />
      </div>
      <input className="new-card-form__form-button"
        type="submit"
        value="Add Card"
      />
    </form>
  );

};

NewCardForm.propTypes = {
  boardName: PropTypes.string.isRequired,
  addCardCallBack: PropTypes.func.isRequired,
};

export default NewCardForm;