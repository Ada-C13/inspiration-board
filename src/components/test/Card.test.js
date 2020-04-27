import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test(' it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        id={1000}
        text={"New Card - Take a big breath"}
        emoji={"beer"}
        deleteCallBack={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
}); 