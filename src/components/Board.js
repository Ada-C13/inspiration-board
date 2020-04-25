import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
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

	// useEffect(() => {}, []);

	const deleteCardcallBack = (id) => {
		const newCardsList = cardsList.filter((post) => {
			return post.card.id !== id;
		});

		if (newCardsList.length < cardsList.length) {
			axios
				.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
				.then((response) => {
					console.log(`Card with id #${id} was deleted`);
				})
				.catch((error) => {
					setErrorMessage(`Error: ${error.message}`);
				});
		}

		setCardsList(newCardsList);
	};

	const addCardCallBack = (card) => {
		let newEmoji = emoji.getName(card.emoji);
		if(!newEmoji) {
			newEmoji = card.emoji
		}
				axios
					.post(`https://inspiration-board.herokuapp.com/boards/cathynikki/cards?text=${card.text}&emoji=${newEmoji}`)
					.then((response) => {
						const newCard = response.data;
						const newCardsList = [ ...cardsList, newCard ];
						setCardsList(newCardsList);
					})
					.catch((error) => {
						setErrorMessage(`Error: ${error.message}`);
					});
	};

	const board = cardsList.map((post) => {
		return (
			<div key={post.card.id}>
				<Card deleteCardcallBack={deleteCardcallBack} id={post.card.id} text={post.card.text} emoji={post.card.emoji} />
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
			<NewCardForm addCardCallBack={addCardCallBack} />
		</div>
	);
};

Board.propTypes = {
	url       : PropTypes.string.isRequired,
	boardName : PropTypes.string.isRequired
};

export default Board;
