import React from 'react';
import { render, cleanup, getByTitle } from '@testing-library/react'
import Board from './Board'

describe('Board Component', () => {
  afterEach(cleanup);
  const renderSampleBoard = () => render(<Board
    url="https://inspiration-board.herokuapp.com/"
    boardName={`Hi`}
  />);

  test('A Board can be rendered', () => {
    const { getByTitle } = renderSampleBoard();
    const BoardElement = getByTitle(/Hi/i);
    expect(BoardElement).toBeInTheDocument;
  });
});


