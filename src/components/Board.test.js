import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Board from './Board';

describe('BoardTest', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Board
      url="https://inspiration-board.herokuapp.com/boards/"
      boardName={`lak-and-katie`}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});