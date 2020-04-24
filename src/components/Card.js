import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

const Card = ({emoji, text, deleteCallback, id}) => { 
  
  return (
    <div className="card"> //?? should we keep this? 
      <div className="stuffInCard">
        <div className="cardText">{text ? text : ''}</div>
        <div className="cardEmoji">{emoji ? emoji.getUnicode(emoji) : ''}</div>
        <button className="cardDeleteButton" onClick={() => {deleteCallback(id)}}>Delete</button>
      </div>
    </div>
  )
  
// {
//   "card": {
//     "id": 4733,
//     "text": "'Be patient'",
//     "emoji": "'heart'"
//   }
// };

// Card.propTypes = {
//   id: PropTypes.number,
//   text: PropTypes.string.isRequired,
//   emoji: PropTypes.string,
//   deleteCallback: PropTypes.func,
// };
//card data

// const studentIds = newStudentList.map(student => student.id);
//const nextId = Math.max(...studentIds) + 1;

export default Card;
