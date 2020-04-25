import React from "react";
import PropTypes from "prop-types";
import emojiLib from "emoji-dictionary";

import "./Card.css";

const Card = ({ emoji, text, deleteCallback, id }) => {
  return (
    <div className="card">
      <div className="stuffInCard">
        <div className="cardText">{text ? text : ""}</div>
        <div className="cardEmoji">
          {emoji ? emojiLib.getUnicode(emoji) : ""}
        </div>
        <button
          className="cardDeleteButton"
          onClick={() => {
            deleteCallback(id);
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
  deleteCallback: PropTypes.func,
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
