import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {
  return (
    <div className="new-card-form">
      <section className="new-card-form__form">
        <header className="new-card-form__header">Add a new card</header>
        <label className="new-card-form__form-label">Type an inspiration text here</label>
        <select className="new-card-form__form-select">
          <option value="heart_eyes">heart_eyes</option>
        </select>
        <input className="new-card-form__form-textarea"></input>
        <button className="new-card-form__form-button">Submit</button>

      </section>
      

    </div>     
  )

}

export default NewCardForm;