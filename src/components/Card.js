import React from "react";
import PropTypes from "prop-types";
import emojiLib from "emoji-dictionary";

import "./Card.css";

const Card = ({ emoji, text, deleteCard, id }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-text">{text ? text : ""}</div>
        <div className="card__content-emoji">
          {emoji ? emojiLib.getUnicode(emoji) : ""}
        </div>
        <button
          className="card__delete"
          onClick={() => {
            deleteCard(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCard: PropTypes.func,
};
export default Card;

// {
//   "card": {
//     "id": 4733,
//     "text": "'Be patient'",
//     "emoji": "'heart'"
//   }
// };
//card data

// const studentIds = newStudentList.map(student => student.id);
//const nextId = Math.max(...studentIds) + 1;
