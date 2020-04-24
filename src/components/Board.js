import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
	const [ cardsList, setCardsList ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState(null);

	useEffect(() => {
		axios
			.get(props.url + props.boardName + '/cards')
			.then((response) => {
				console.log(response.data);
				const newCardsList = response.data;
				setCardsList(newCardsList);
			})
			.catch((error) => {
				console.log(error.message);
				setErrorMessage(error.message);
			});
	}, []);

	const board = cardsList.map((post) => {
		return (
			<div key={post.card.id}>
				<Card text={post.card.text} emoji={post.card.emoji} />
			</div>
		);
	});

	return (
		<div className="Board">
			{errorMessage ? (
				<div>
					<h2 className="validation-errors-display">{errorMessage}</h2>
				</div>
			) : (
				''
			)}
			{board}
		</div>
	);
};

Board.propTypes = {
	url       : PropTypes.string.isRequired,
	boardName : PropTypes.string.isRequired
};

export default Board;
