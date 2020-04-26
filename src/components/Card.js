import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

const Card = (props) => {
	return (
		<div className={`card ${props.id % 2 ? '' : 'pink'}`}>
			<div className="card__content">
				<p className="card__content-text">{props.text}</p>
				<p className="card__content-emoji">{props.emoji && emoji.getUnicode(props.emoji)}</p>
				<div className="card__delete_div">
					<button onClick={() => props.deleteCardcallBack(props.id)} className="card__delete">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	text               : PropTypes.string,
	emoji              : PropTypes.string,
	id                 : PropTypes.number,
	deleteCardcallBack : PropTypes.func.isRequired
};

export default Card;
