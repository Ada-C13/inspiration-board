import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.data.text}
      {/* {props.data.emoji} */}
    </div>
  )
}

Card.propTypes = {

};

export default Card;
