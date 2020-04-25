import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './card.js';

describe('Card', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
        text=''
        emoji=''
        onClickCallBack={() => { }}
        id={4}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});