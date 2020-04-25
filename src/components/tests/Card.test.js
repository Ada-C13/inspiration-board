import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card'

describe('Card Component', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
      text="Hello"
      emoji="heart-eyes"
      onClickCallback={() => { }}
    />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});