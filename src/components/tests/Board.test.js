import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Board from '../Board'

describe('Board Component', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Board
      url="https://inspiration-board.herokuapp.com/"
      boardName={`Sharon-Olga`}
    />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
