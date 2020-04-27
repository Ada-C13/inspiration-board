import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Card from '../Card';

describe('Card', () => {
  test('that Card matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
      id={1}
      text={"Hi!"} 
      removeCardCallback={() => {}}
      key={1}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});