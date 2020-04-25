import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Board from './Board'; 

describe('Board', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Board
        url={"https://inspiration-board.herokuapp.com/"}
        boardName={"tofu-tofu-too-too-too"}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});