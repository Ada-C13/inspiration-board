import React from 'react';
import PropTypes from 'prop-types';
import './ChangeBoardNameBtn.css';

const ChangeBoardNameBtn = (props) => {

  const onBoardNameChange = (event) => {
    const {value} = event.target;
    props.changeBoardNameCallback(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="board-name" onSubmit={onFormSubmit}>
        <div>
          <label className="change-board-name-btn-label" htmlFor="boardName">Choose Board ▼</label>
          <select
            id="boardName"
            name="boardName"
            onChange={onBoardNameChange} 
            value={props.boardName}
            className="change-board-name-btn--select "
          >
            <option value="">--Choose Board--</option>
            <option value="kitty">Kate P's Board</option>
            <option value="hannah-j">Hannah J's Board</option>
          </select>
        </div>
      </form>

    </div>
  );
};

ChangeBoardNameBtn.propTypes = {
  changeBoardNameCallback: PropTypes.func.isRequired,
};

export default ChangeBoardNameBtn;