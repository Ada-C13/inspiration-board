import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDownMenu.css';

const BoardsMenu = ({ title, items = [], onChosenCallback }) => {
	const [ open, setOpen ] = useState(false);
	const toggle = () => setOpen(!open);

	const handleOnClick = (item) => {
    setOpen(!open);
		onChosenCallback(item);
	};

	return (
		<div className="dd-container">
			<div
				className="dd-header"
				role="button"
				onClick={() => toggle(!open)}
			>
			  <h4 className="dd-header__title"><span className="header__text">{title}...</span></h4>
			</div>
			{open && (
				<ul className="dd-list">
					{items.map((item) => (
						<li className="dd-list-item" key={item.board.id}>
							<button type="button" onClick={() => handleOnClick(item)}>
								<span>{item.board.name}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

BoardsMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items:PropTypes.array.isRequired,
  onChosenCallback: PropTypes.func.isRequired,
};

export default BoardsMenu;