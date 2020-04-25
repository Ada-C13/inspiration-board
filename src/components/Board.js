import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';

import './Board.css';
import DropDownMenu from './DropDownMenu';
import Card from './Card';
import NewCardForm from './NewCardForm';

const Board = (props) => {
	const [ cardsList, setCardsList ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState(null);
	const [ currentBoard, setCurrentBoard ] = useState(props.boardName);

	useEffect(
		() => {
			axios
				.get(props.url + currentBoard + '/cards')
				.then((response) => {
					const newCardsList = response.data;
					setCardsList(newCardsList);
				})
				.catch((error) => {
					console.log(error.message);
					setErrorMessage(error.message);
				});
		},
		[ currentBoard, props.url ]
	);

	const deleteCardcallBack = (id) => {
		const newCardsList = cardsList.filter((post) => {
			return post.card.id !== id;
		});

		if (newCardsList.length < cardsList.length) {
			axios
				.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
				.then((response) => {
					console.log(`Card ${response.data.card.id} was deleted`);
				})
				.catch((error) => {
					setErrorMessage(`Error: ${error.message}`);
				});
		}

		setCardsList(newCardsList);
	};

	const addCardCallBack = (card) => {
		let newEmoji = emoji.getName(card.emoji);
		if (!newEmoji) {
			newEmoji = card.emoji;
		}
		axios
			.post(`https://inspiration-board.herokuapp.com/boards/${currentBoard}/cards?text=${card.text}&emoji=${newEmoji}`)
			.then((response) => {
				const newCard = response.data;
				const newCardsList = [ ...cardsList, newCard ];
				setCardsList(newCardsList);
			})
			.catch((error) => {
				setErrorMessage(`Error: ${error.message}`);
			});
	};

	const chooseBoard = (item) => {
		setCurrentBoard(item.board.name);
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
			<h2> Current Board @ {currentBoard} </h2>
			<DropDownMenu title="Choose Board" items={BOARDS} onChosenCallback={chooseBoard} />
			<div className='card-container'>
					{board}
			</div>
      <h2>You are posting @ {currentBoard} </h2>
			<NewCardForm addCardCallBack={addCardCallBack} />
		</div>
	);
};

const BOARDS = [
  {
    board : {
      id   : 254,
      name : 'cathynikki'
    }
  },
  {
    board : {
      id   : 234,
      name : 'banana-banana'
    }
  },
  {
    board : {
      id   : 224,
      name : 'foobar'
    }
  },
  {
    board : {
      id   : 1,
      name : 'Ada-Lovelace'
    }
  },
  {
    board : {
      id   : 12,
      name : 'Green-Pea'
    }
  },
  {
    board : {
      id   : 151,
      name : 'fluffy'
    }
  },

];

Board.propTypes = {
	url       : PropTypes.string.isRequired,
	boardName : PropTypes.string.isRequired
};

export default Board;
