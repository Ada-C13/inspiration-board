import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {

  console.log(props);
  return (
    <div id={props.id} className="card">
      Card
      <p>{props.text} </p>
      <p>{props.emoji} </p>
    </div>
  )
}

Card.propTypes = {

};

export default Card;
