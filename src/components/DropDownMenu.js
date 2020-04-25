import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import './DropDownMenu.css';

const BoardsMenu = ({ title, items = [], onChosenCallback }) => {
	const [ open, setOpen ] = useState(false);
	const toggle = () => setOpen(!open);

	const handleOnClick = (item) => {
    setOpen(!open)
		onChosenCallback(item);
	};

	return (
		<div className="dd-container">
			<div
				tabIndex={0}
				className="dd-header"
				role="button"
				onKeyPress={() => toggle(!open)}
				onClick={() => toggle(!open)}
			>
				<div className="dd-header__title">
					<p className="dd-header__title--bold">{title}</p>
				</div>
				<div className="dd-header__action">
					<p>{open ? 'close' : 'open'}</p>
				</div>
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

BoardsMenu.propTypes = {};

export default BoardsMenu;
