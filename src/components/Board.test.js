import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react'
import Board from './Board'

describe('Board Component', () => {
  afterEach(cleanup);
  const renderSampleBoard = () => render(<Board
    url="https://inspiration-board.herokuapp.com/"
    boardName={`Hi`}
  />);

  test('A Board can be rendered', () => {
    const { getByText } = renderSampleBoard();
    const BoardElement = getByText(/Inspiration Board/i);
    expect(BoardElement).toBeInTheDocument();
});
});


